import React, { FC, memo } from 'react'
import { ValueOf } from 'shared/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppButton.module.scss'

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string,
	variant?: ButtonVariantType
	size?: ButtonSizeType
	shape?: ButtonShapeType
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
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

export const AppButton: FC<AppButtonProps> = memo((props: AppButtonProps) => {
	const {
		className,
		children,
		variant = ButtonVariant.PRIMARY,
		shape,
		size = ButtonSize.M,
		disabled,
		type = 'button',
		...otherProps
	} = props

	const mods = {
		[cls.disabled]: disabled
	}

	const extra = [
		className,
		cls[variant],
		cls[size],
		shape && cls[shape]
	]

	return <button
		data-testid='btn'
		type={type}
		className={classNames(cls.AppButton, mods, extra)}
		{...otherProps}>
		{children}
	</button>
})