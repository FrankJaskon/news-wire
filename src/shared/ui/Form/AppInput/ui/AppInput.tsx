import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react'
import { ValueOf } from 'shared/config/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './AppInput.module.scss'

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
	value?: string | number
	onChange?: (value: string) => void
	readonly?: boolean
	variant?: InputVariantType
	color?: InputColorType
}

export const InputVariant = {
	PRIMARY: 'primary',
	CLEAR: 'clear'
} as const

export const InputColor = {
	PRIMARY: 'primary-color',
	SECONDARY: 'secondary-color'
} as const

export type InputVariantType = ValueOf<typeof InputVariant>
export type InputColorType = ValueOf<typeof InputColor>

export const AppInput: FC<AppInputProps> = memo((props: AppInputProps) => {
	const {
		className,
		variant = InputVariant.PRIMARY,
		color,
		value,
		onChange,
		readonly = false,
		...extraProps
	} = props

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const mods = {
		[cls.readonly]: readonly
	}

	const extra = [
		className,
		cls[variant],
		color && cls[color]
	]

	return <input
		className={classNames(cls.AppInput, mods, extra)}
		value={value}
		onChange={onChangeHandler}
		readOnly={readonly}
		{...extraProps} />
})