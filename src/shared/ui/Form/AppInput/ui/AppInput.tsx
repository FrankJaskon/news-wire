import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppInput.module.scss'

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
	value?: string
	onChange?: (value: string) => void
}

export const AppInput: FC<AppInputProps> = memo((props: AppInputProps) => {
	const {
		className,
		value,
		onChange,
		...extraProps
	} = props

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	return <input
		className={classNames(cls.AppInput, {}, [className])}
		value={value}
		onChange={onChangeHandler}
		{...extraProps} />
})