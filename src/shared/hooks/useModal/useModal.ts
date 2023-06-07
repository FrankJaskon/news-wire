import { useCallback, useEffect, useRef, useState } from 'react'

interface UseModalProps {
	onClose?: () => void
	isOpen?: boolean
	animationDelay?: number
}

export const useModal = ({ onClose, isOpen, animationDelay }: UseModalProps) => {
	const [isMounted, setIsMounted] = useState<boolean>(false)
	const [isClosing, setIsClosing] = useState<boolean>(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const close = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
				setIsMounted(false)
			}, animationDelay)
		}
	}, [onClose, animationDelay])

	const onPressEscape = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close()
			}
		},
		[close]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onPressEscape)
			setIsMounted(true)
			document.body.classList.add('modal-open')
		} else {
			document.body.classList.remove('modal-open')
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onPressEscape)
		}
	}, [isOpen, onPressEscape])

	return {
		isMounted,
		isClosing,
		close,
	}
}
