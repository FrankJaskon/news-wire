import { ButtonHTMLAttributes, FC, HTMLAttributes, ReactNode, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppButton.module.scss'

export type BorderVariantType = 'normal' | 'save' | 'cancel'

interface ComponentProps {
	className?: string
	variant?: 'primary' | 'custom' | 'outline' | 'filled'
	borderVariant?: BorderVariantType
	size?: 's' | 'm' | 'l' | 'xl'
	shape?: 'square'
	fullWidth?: boolean
	addonLeft?: ReactNode
	addonRight?: ReactNode
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
}

interface ButtonProps extends ComponentProps, ButtonHTMLAttributes<HTMLButtonElement> {
	as?: 'button'
}

interface DivProps extends ComponentProps, HTMLAttributes<HTMLDivElement> {
	as: 'div'
}

type AppButtonProps = ButtonProps | DivProps

export const AppButton: FC<AppButtonProps> = memo((props: AppButtonProps) => {
	const {
		className,
		children,
		variant = 'primary',
		borderVariant = 'normal',
		size = 'm',
		disabled,
		fullWidth,
		shape,
		addonLeft,
		addonRight,
		type = 'button',
		as = 'button',
		...otherProps
	} = props

	const mods = {
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
		[cls.withAddonLeft]: Boolean(addonLeft),
		[cls.withAddonRight]: Boolean(addonRight),
	}

	const extra = [className, cls[variant], cls[size], shape && cls[shape], cls[borderVariant]]

	if (as === 'button') {
		return (
			<button
				data-testid='btn'
				type={type}
				className={classNames(cls.AppButton, mods, extra)}
				{...(otherProps as ButtonHTMLAttributes<HTMLButtonElement>)}
			>
				{addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
				{children}
				{addonRight && <div className={cls.addonRight}>{addonRight}</div>}
			</button>
		)
	}

	return (
		<div
			data-testid='btn'
			className={classNames(cls.AppButton, mods, extra)}
			{...(otherProps as HTMLAttributes<HTMLDivElement>)}
		>
			{addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
			{children}
			{addonRight && <div className={cls.addonRight}>{addonRight}</div>}
		</div>
	)
})