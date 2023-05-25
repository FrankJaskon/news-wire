import { ButtonHTMLAttributes, FC, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppButton.module.scss'

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: 'primary' | 'custom' | 'outline'
	size?: 's' | 'm' | 'l' | 'xl'
	shape?: 'square'
	fullWidth?: boolean
}

export const AppButton: FC<AppButtonProps> = memo((props: AppButtonProps) => {
	const {
		className,
		children,
		variant = 'primary',
		size = 'm',
		disabled,
		type = 'button',
		fullWidth,
		shape,
		...otherProps
	} = props

	const mods = {
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth,
	}

	const extra = [className, cls[variant], cls[size], shape && cls[shape]]

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
