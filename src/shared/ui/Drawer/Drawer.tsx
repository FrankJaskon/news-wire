import { FC, ReactNode, useMemo } from 'react'
import classNames, { Mods } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import useTheme from 'shared/config/theme/useTheme'
import { Portal } from 'shared/ui/Portal'
import { Overlay } from 'shared/ui/Overlay/Overlay'

interface DrawerProps {
	className?: string
	children: ReactNode
	isOpen?: boolean
	onClose?: () => void
}

export const Drawer: FC<DrawerProps> = (props) => {
	const {
		className,
		children,
		isOpen,
		onClose
	} = props

	const { theme } = useTheme()

	const mods: Mods = useMemo(() => ({
		[cls.opened]: isOpen
	}), [isOpen])

	const extra: (string | undefined)[] = useMemo(() => ([
		className,
		theme,
	]), [theme, className])

	return <Portal>
		<div className={classNames(
			cls.Drawer,
			mods,
			extra)}
		>
			<Overlay onClick={onClose} />
			<div
				className={cls.content}
			>
				{children}
			</div>
		</div>
	</Portal>
}