import { FC, memo } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export type AppLinkProps = LinkProps & {
	className?: string
	variant?: 'primary' | 'secondary' | 'red'
	hover?: boolean
	activeClassName?: string
	flex?: boolean
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
	const {
		to = '#',
		children,
		className,
		variant = 'primary',
		hover = true,
		activeClassName = '',
		flex = false,
		...otherProps
	} = props

	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				classNames(
					cls.AppLink,
					{
						[cls.hover]: hover,
						[activeClassName]: isActive,
						[cls.flex]: flex,
					},
					[className, cls[variant]]
				)
			}
			{...otherProps}
		>
			{children}
		</NavLink>
	)
})
