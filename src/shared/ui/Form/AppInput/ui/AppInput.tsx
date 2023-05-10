import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types/types'
import cls from './AppInput.module.scss'

export interface AppInputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
> {
	value?: string | number
	onChange?: (value: string) => void
	readonly?: boolean
	variant?: InputVariantType
	colorVariant?: InputColorType
	'data-testid'?: string
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
		colorVariant,
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
		colorVariant && cls[colorVariant]
	]

	return <input
		className={classNames(cls.AppInput, mods, extra)}
		value={value}
		onChange={onChangeHandler}
		readOnly={readonly}
		{...extraProps} />
})