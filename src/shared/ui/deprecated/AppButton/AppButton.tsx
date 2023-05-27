import { ButtonHTMLAttributes, FC, memo } from 'react'
import { TextColorType } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types/types'
import cls from './AppButton.module.scss'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: ButtonVariantType
	size?: ButtonSizeType
	shape?: ButtonShapeType
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
	contentHue?: TextColorType
	noBg?: boolean
}

export const ButtonVariant = {
	PRIMARY: 'primary',
	CUSTOM: 'custom',
	OUTLINE: 'outline',
} as const

export const ButtonSize = {
	S: 's',
	M: 'm',
	L: 'l',
	XL: 'xl',
} as const

export const ButtonShape = {
	SQUARE: 'square',
} as const

export type ButtonVariantType = ValueOf<typeof ButtonVariant>
export type ButtonSizeType = ValueOf<typeof ButtonSize>
export type ButtonShapeType = ValueOf<typeof ButtonShape>

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export const AppButton: FC<AppButtonProps> = memo((props: AppButtonProps) => {
	const {
		className,
		children,
		variant = ButtonVariant.PRIMARY,
		shape,
		size = ButtonSize.M,
		disabled,
		type = 'button',
		contentHue,
		noBg,
		...otherProps
	} = props

	const mods = {
		[cls.disabled]: disabled,
		[cls.noBg]: noBg,
	}

	const extra = [
		className,
		cls[variant],
		cls[size],
		shape && cls[shape],
		contentHue && cls[contentHue],
	]

	return (
		<button
			data-testid='btn'
			type={type}
			className={classNames(cls.AppButton, mods, extra)}
			{...otherProps}
		>
			{children}
		</button>
	)
})
