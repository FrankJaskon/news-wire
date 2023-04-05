import { FC, ReactNode } from 'react'
import { ValueOf } from 'shared/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './FormControl.module.scss'

interface FormControlProps {
	className?: string
	children: ReactNode
	variant?: FormControlVariantType
}

export const FormControlVariant = {
	PRIMARY: 'primary',
	UNDERLINED: 'underlined'
} as const

export type FormControlVariantType = ValueOf<typeof FormControlVariant>

export const FormControl: FC<FormControlProps> = (props) => {
	const {
		className,
		children,
		variant = FormControlVariant.PRIMARY
	} = props

	return <div className={classNames('', {}, [className, cls[variant]])}>
		{children}
	</div>
}