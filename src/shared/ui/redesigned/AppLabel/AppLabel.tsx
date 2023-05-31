import { FC, LabelHTMLAttributes, memo, ReactNode } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppLabel.module.scss'

export interface AppLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	className?: string
	htmlFor?: string
	children: ReactNode
	variant?: 'primary' | 'srOnly'
}

export const AppLabel: FC<AppLabelProps> = memo((props: AppLabelProps) => {
	const { className, htmlFor, children, variant = 'primary', ...extraProps } = props

	return (
		<label
			className={classNames(cls.AppLabel, {}, [className, cls[variant]])}
			htmlFor={htmlFor}
			{...extraProps}
		>
			{children}:
		</label>
	)
})
