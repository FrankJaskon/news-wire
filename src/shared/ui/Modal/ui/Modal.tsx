import { FC, MouseEvent, ReactNode, useState, useRef, useEffect, useCallback } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal'
import cls from './Modal.module.scss'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
}

const ANIMATION_DELAY = 200

export const Modal: FC<ModalProps> = (props) => {
	const {
		className,
		isOpen,
		onClose,
		children
	} = props

	const [isClosing, setIsClosing] = useState<boolean>(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const onContentClick = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation()
	}

	const closeHandler = useCallback(() => {
		if (onClose) {
			console.log(onClose)
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onPressEscape = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			closeHandler()
		}
	}, [closeHandler])

	const mods: Record<string, boolean> = {
		[cls.open]: isOpen,
		[cls.closed]: isClosing
	} as const

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onPressEscape)
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onPressEscape)
		}
	}, [isOpen, onPressEscape])

	return <Portal>
		<div className={classNames(cls.Modal, mods, [className])}>
			<div
				onClick={closeHandler}
				className={cls.overlay}>
				<div
					className={cls.content}
					onClick={onContentClick}>
					{children}
				</div>
			</div>
		</div>
	</Portal>
}