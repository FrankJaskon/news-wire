import { FC, useMemo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types/types'
import cls from './AppIcon.module.scss'

export const AppIconVariant = {
	PRIMARY: 'primary-color',
	SECONDARY: 'secondary-color',
	CONTRAST: 'contrast-color',
} as const

export const AppIconSize = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	CUSTOM: 'custom',
} as const

export type AppIconVariantType = ValueOf<typeof AppIconVariant>
export type AppIconSizeType = ValueOf<typeof AppIconSize>

export interface AppIconProps extends React.SVGAttributes<SVGElement> {
	className?: string
	Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	variant?: AppIconVariantType
	size?: AppIconSizeType
	'data-testid'?: string
}

export const AppIcon: FC<AppIconProps> = props => {
	const {
		className,
		Svg,
		variant = AppIconVariant.PRIMARY,
		size = AppIconSize.MEDIUM,
		'data-testid': dataTestId = 'app-icon',
		...otherProps
	} = props

	const extra: (string | undefined)[] = useMemo(
		() => [className, cls[variant], cls[size]],
		[size, variant, className]
	)

	return (
		<Svg
			className={classNames(cls.AppIcon, {}, extra)}
			data-testid={dataTestId}
			{...otherProps}
		/>
	)
}
