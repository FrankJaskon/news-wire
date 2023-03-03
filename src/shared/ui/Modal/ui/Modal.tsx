import { FC, MouseEvent, ReactNode, useState, useRef, useEffect, useCallback } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import type { Mods } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal'
import cls from './Modal.module.scss'

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
	const [isMouseDown, setIsMouseDown] = useState(false)
	const [isClosing, setIsClosing] = useState<boolean>(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()
	const overlayRef = useRef<HTMLDivElement | null>(null)
	const contentRef = useRef<HTMLDivElement | null>(null)

	const mods: Mods = {
		[cls.open]: isOpen,
		[cls.closed]: isClosing,
	} as const

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		if (isMouseDown) return
		if (e.target === overlayRef.current) {
			setIsMouseDown(true)
		}
	}

	const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
		if (!isMouseDown) return
		if (e.target === overlayRef.current) {
			setIsMouseDown(false)
			closeHandler()
		}
	}

	const handleClickOnOverlay = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) {
			e.preventDefault()
		}
	}

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
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
		>
			<div
				onMouseDown={handleClickOnOverlay}
				ref={overlayRef}
				className={cls.overlay}
			>
				<div
					ref={contentRef}
					className={cls.content}
				>
					{children}
				</div>
			</div>
		</div>
	</Portal>
}