import { FC, ReactNode, useMemo } from 'react'
import classNames, { Mods } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import useTheme from 'shared/config/theme/useTheme'
import { Portal } from 'shared/ui/Portal'
import { Overlay } from 'shared/ui/Overlay/Overlay'
import { useModal } from 'shared/hooks/useModal/useModal'

interface DrawerProps {
	className?: string
	children: ReactNode
	isOpen?: boolean
	onClose?: () => void
	lazy?: boolean
}
const ANIMATION_DELAY = 300

export const Drawer: FC<DrawerProps> = (props) => {
	const {
		className,
		children,
		isOpen,
		onClose,
		lazy = false
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

	const { theme } = useTheme()

	const mods: Mods = useMemo(() => ({
		[cls.opened]: isOpen,
		[cls.closed]: isClosing
	}), [isOpen, isClosing])

	const extra: (string | undefined)[] = useMemo(() => ([
		className,
		theme,
	]), [theme, className])


	if (lazy && !isMounted) {
		return null
	}

	return <Portal>
		<div className={classNames(
			cls.Drawer,
			mods,
			extra)}
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