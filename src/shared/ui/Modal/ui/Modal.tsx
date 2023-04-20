import { FC, ReactNode, useState, useRef, useEffect, useCallback } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import type { Mods } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal'
import cls from './Modal.module.scss'
import { Overlay } from 'shared/ui/Overlay/Overlay'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
}

const ANIMATION_DELAY = 200

export const Modal: FC<ModalProps> = (props) => {
	const {
		className,
		isOpen,
		onClose,
		children,
		lazy
	} = props

	const [isMounted, setIsMounted] = useState<boolean>(false)
	const [isClosing, setIsClosing] = useState<boolean>(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.closed]: isClosing,
	} as const

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
				setIsMounted(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onPressEscape = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler()
		}
	}, [closeHandler])

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onPressEscape)
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onPressEscape)
		}
	}, [isOpen, onPressEscape])

	if (lazy && !isMounted) {
		return null
	}

	return <Portal>
		<div
			className={classNames(cls.Modal, mods, [className])}
		>
			{isOpen && <>
				<Overlay onClick={closeHandler} />
				<div
					className={cls.content}
				>
					{children}
				</div>
			</>}
		</div>
	</Portal>
}