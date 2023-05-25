import { FC, HTMLAttributes, ReactNode, useMemo } from 'react'
import classNames, { Mods } from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types/types'
import cls from './AppCard.module.scss'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export const CardVariant = {
	PRIMARY: 'primary',
	LIGHT: 'light',
	DARK: 'dark',
	SHEET: 'sheet',
} as const

export type CardVariantType = ValueOf<typeof CardVariant>

export interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children: ReactNode
	noPaddings?: boolean
	variant?: CardVariantType
	'data-testid'?: string
	max?: boolean
}

export const AppCard: FC<AppCardProps> = props => {
	const {
		className,
		children,
		noPaddings = false,
		variant = CardVariant.SHEET,
		'data-testid': dataTestId = 'app-card',
		max,
		...extraProps
	} = props

	const mods: Mods = useMemo(
		() => ({
			[cls.noPaddings]: noPaddings,
			[cls.max]: max,
		}),
		[noPaddings, max]
	)

	const extra: (string | undefined)[] = useMemo(
		() => [className, cls[variant]],
		[className, variant]
	)

	return (
		<div
			className={classNames(cls.AppCard, mods, extra)}
			data-testid={dataTestId}
			{...extraProps}
		>
			{children}
		</div>
	)
}
