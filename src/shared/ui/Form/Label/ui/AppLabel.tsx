import { FC, LabelHTMLAttributes, memo, ReactNode } from 'react'
import { ValueOf } from '@/shared/types/types'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppLabel.module.scss'

export const LabelVariant = {
	PRIMARY: 'primary',
	SR_ONLY: 'srOnly'
} as const

type LabelVariantType = ValueOf<typeof LabelVariant>

export interface AppLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	className?: string
	htmlFor: string
	children: ReactNode,
	variant?: LabelVariantType
}

export const AppLabel: FC<AppLabelProps> = memo((props: AppLabelProps) => {
	const {
		className,
		htmlFor,
		children,
		variant = LabelVariant.PRIMARY,
		...extraProps
	} = props

	return <label
		className={classNames(cls.AppLabel, {}, [className, cls[variant]])}
		htmlFor={htmlFor}
		{...extraProps}>
		{children}:
	</label>
})