import React, { FC } from 'react'
import { ValueOf } from 'shared/config/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppButton.module.scss'

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    variant?: ButtonVariantType
	size?: ButtonSizeType
	shape?: ButtonShapeType
}

export const ButtonVariant = {
	PRIMARY: 'primary',
	CUSTOM: 'custom',
	OUTLINE: 'outline'
} as const

export const ButtonSize = {
	M: 'm',
	L: 'l',
	XL: 'xl'
} as const

export const ButtonShape = {
	SQUARE: 'square',
} as const

export type ButtonVariantType = ValueOf<typeof ButtonVariant>
export type ButtonSizeType = ValueOf<typeof ButtonSize>
export type ButtonShapeType = ValueOf<typeof ButtonShape>

export const AppButton: FC<AppButtonProps> = (props) => {
	const {
		className,
		children,
		variant = ButtonVariant.PRIMARY,
		shape,
		size = ButtonSize.M,
		...otherProps } = props

	return <button
		data-testid='btn'
		className={classNames(cls.AppButton, {}, [className, cls[variant], cls[size], cls[shape]])}
		{...otherProps}>
		{children}
	</button>
}