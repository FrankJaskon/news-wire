import { FC, memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import classNames from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types/types'
import cls from './AppLink.module.scss'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export const AppLinkVariant = {
	PRIMARY: 'primary',
	SECONDARY: 'secondary',
	UNDERLINED: 'underlined',
	PRIMARY_BUTTON: 'primary_button',
	CUSTOM_BUTTON: 'custom_button',
	CLEAR: 'clear',
} as const

export type AppLinkVariantType = ValueOf<typeof AppLinkVariant>

export type AppLinkProps = Omit<LinkProps, 'to'> & {
	className?: string
	variant?: AppLinkVariantType
	to?: string
	hover?: boolean
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
	const {
		to = '#',
		children,
		className,
		variant = AppLinkVariant.SECONDARY,
		hover = true,
		...otherProps
	} = props

	return (
		<Link
			to={to}
			className={classNames(
				cls.AppLink,
				{
					[cls.hover]: hover,
				},
				[className, cls[variant]]
			)}
			{...otherProps}
		>
			{children}
		</Link>
	)
})
