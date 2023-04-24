import { FC, HTMLAttributes, ReactNode, useMemo } from 'react'
import classNames, { Mods } from '@/shared/lib/classNames/classNames'
import cls from './AppCard.module.scss'
import { ValueOf } from '@/shared/types/types'

export const CardVariant = {
	PRIMARY: 'primary',
	LIGHT: 'light',
	DARK: 'dark'
} as const

export type CardVariantType = ValueOf<typeof CardVariant>

export interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children: ReactNode
	noPaddings?: boolean
	variant?: CardVariantType
}

export const AppCard: FC<AppCardProps> = (props) => {
	const {
		className,
		children,
		noPaddings = false,
		variant = CardVariant.PRIMARY,
		...extraProps
	} = props

	const mods: Mods = useMemo(() => ({
		[cls.noPaddings]: noPaddings
	}), [noPaddings])

	const extra: (string | undefined)[] = useMemo(() => ([
		className,
		cls[variant]
	]), [className, variant])

	return (
		<div
			className={classNames(
				cls.AppCard,
				mods,
				extra
			)}
			{...extraProps}
		>
			{children}
		</div>
	)
}