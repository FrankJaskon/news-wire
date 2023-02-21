import { FC, LabelHTMLAttributes, ReactNode } from 'react'
import { ValueOf } from 'shared/config/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppLabel.module.scss'

const labelVariant = {
	SR_ONLY: 'srOnly'
} as const

type LabelVariantType = ValueOf<typeof labelVariant>

interface AppLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	className?: string
	htmlFor: string
	children: ReactNode,
	variant?: LabelVariantType
}

export const AppLabel: FC<AppLabelProps> = (props) => {
	const {
		className,
		htmlFor,
		children,
		variant = labelVariant.SR_ONLY,
		...extraProps
	} = props

	return <label
		className={classNames(cls.AppLabel, {}, [className, cls[variant]])}
		htmlFor={htmlFor}
		{...extraProps}>
		{children}
	</label>
}