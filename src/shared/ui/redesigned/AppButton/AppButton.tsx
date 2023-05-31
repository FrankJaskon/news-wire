import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppButton.module.scss'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: 'primary' | 'custom' | 'outline' | 'filled'
	borderVariant?: 'normal' | 'save' | 'cancel'
	size?: 's' | 'm' | 'l' | 'xl'
	shape?: 'square'
	fullWidth?: boolean
	addonLeft?: ReactNode
	addonRight?: ReactNode
}

export const AppButton: FC<AppButtonProps> = memo((props: AppButtonProps) => {
	const {
		className,
		children,
		variant = 'primary',
		borderVariant = 'normal',
		size = 'm',
		disabled,
		type = 'button',
		fullWidth,
		shape,
		addonLeft,
		addonRight,
		...otherProps
	} = props

	const mods = {
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
		[cls.withAddonLeft]: Boolean(addonLeft),
		[cls.withAddonRight]: Boolean(addonRight),
	}

	const extra = [className, cls[variant], cls[size], shape && cls[shape], cls[borderVariant]]

	return (
		<button
			data-testid='btn'
			type={type}
			className={classNames(cls.AppButton, mods, extra)}
			{...otherProps}
		>
			{addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
			{children}
			{addonRight && <div className={cls.addonRight}>{addonRight}</div>}
		</button>
	)
})
