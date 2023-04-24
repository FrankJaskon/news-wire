import { FC, ReactNode } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import type { Mods } from '@/shared/lib/classNames/classNames'
import { Portal } from '@/shared/ui/Portal'
import cls from './Modal.module.scss'
import { Overlay } from '@/shared/ui/Overlay/Overlay'
import { useModal } from '@/shared/hooks/useModal/useModal'

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

	const {
		isMounted,
		isClosing,
		close
	} = useModal({
		isOpen,
		onClose,
		animationDelay: ANIMATION_DELAY
	})

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.closed]: isClosing,
	} as const

	if (lazy && !isMounted) {
		return null
	}

	return <Portal>
		<div
			className={classNames(cls.Modal, mods, [className])}
		>
			<Overlay onClick={close} />
			<div
				className={cls.content}
			>
				{children}
			</div>
		</div>
	</Portal>
}