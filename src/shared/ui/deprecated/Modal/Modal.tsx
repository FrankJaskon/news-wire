import { FC, ReactNode } from 'react'
import { useModal } from '@/shared/hooks/useModal/useModal'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { Overlay } from '../../redesigned/Overlay/Overlay'
import { Portal } from '../../redesigned/Portal'
import cls from './Modal.module.scss'
import type { Mods } from '@/shared/lib/classNames/classNames'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
}

const ANIMATION_DELAY = 200

export const Modal: FC<ModalProps> = props => {
	const { className, isOpen, onClose, children, lazy } = props

	const { isMounted, isClosing, close } = useModal({
		isOpen,
		onClose,
		animationDelay: ANIMATION_DELAY,
	})

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.closed]: isClosing,
	} as const

	if (lazy && !isMounted) {
		return null
	}

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			off={
				<Portal>
					<div className={classNames(cls.Modal, mods, [className, 'App'])}>
						<Overlay onClick={close} />
						<div className={cls.content}>{children}</div>
					</div>
				</Portal>
			}
			on={
				<Portal>
					<div className={classNames(cls.Modal, mods, [className, 'App-redesign'])}>
						<Overlay onClick={close} />
						<div className={cls.content}>{children}</div>
					</div>
				</Portal>
			}
		/>
	)
}
