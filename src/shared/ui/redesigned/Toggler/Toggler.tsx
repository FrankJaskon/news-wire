import { FC, InputHTMLAttributes, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './Toggler.module.scss'

export interface TogglerProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	isChecked: boolean
	onChange: () => void
}

export const Toggler: FC<TogglerProps> = memo((props: TogglerProps) => {
	const { className, isChecked, onChange, ...otherProps } = props

	return (
		<label className={classNames(cls.Toggler, {}, [className])}>
			<input type='checkbox' checked={isChecked} onChange={onChange} {...otherProps} />
			<span className={cls.slider} />
		</label>
	)
})
