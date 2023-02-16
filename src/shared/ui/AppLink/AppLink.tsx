import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LinkProps } from 'react-router-dom'
import { ValueOf } from 'shared/config/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export const AppLinkTheme = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
	UNDERLINED: 'underlined',
} as const

export type AppLinkThemeType = ValueOf<typeof AppLinkTheme>

interface AppLinkProps extends LinkProps {
    className?: string
    variant?: AppLinkThemeType
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		to,
		children,
		className,
		variant = AppLinkTheme.SECONDARY,
		...otherProps } = props

	return <Link
		to={to}
		className={classNames(cls.AppLink, {}, [className, cls[variant]])}
		{...otherProps}>
		{ children }
	</Link>
}