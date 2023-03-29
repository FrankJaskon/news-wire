import { FC } from 'react'
import { ValueOf } from 'shared/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppIcon.module.scss'

const AppIconVariant = {
	PRIMARY: 'primary-color',
	SECONDARY: 'secondary-color',
	CONTRAST: 'contrast-color'
} as const

export type AppIconVariantType = ValueOf<typeof AppIconVariant>

export interface AppIconProps {
	className?: string
	Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
	variant?: AppIconVariantType
}

export const AppIcon: FC<AppIconProps> = (props) => {
	const {
		className,
		Svg,
		variant = AppIconVariant.PRIMARY
	} = props

	return <Svg className={classNames(cls.AppIcon, {}, [className, cls[variant]])} />
}