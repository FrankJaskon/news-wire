import React, { InputHTMLAttributes, memo, ReactNode, useEffect, useRef, useState } from 'react'
import classNames, { Mods } from '@/shared/lib/classNames/classNames'
import cls from './AppInput.module.scss'

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly' | 'size'
>

interface AppInputProps extends HTMLInputProps {
	className?: string
	value?: string | number
	onChange?: (value: string) => void
	autofocus?: boolean
	readonly?: boolean
	addonLeft?: ReactNode
	addonRight?: ReactNode
	size?: 'small' | 'normal'
	variant?: 'primary' | 'custom'
}

export const AppInput = memo((props: AppInputProps) => {
	const {
		className,
		value,
		onChange,
		type = 'text',
		placeholder,
		autofocus,
		readonly,
		addonLeft,
		addonRight,
		size = 'normal',
		variant = 'primary',
		...otherProps
	} = props
	const ref = useRef<HTMLInputElement>(null)
	const [isFocused, setIsFocused] = useState(false)

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true)
			ref.current?.focus()
		}
	}, [autofocus])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	const onBlur = () => {
		setIsFocused(false)
	}

	const onFocus = () => {
		setIsFocused(true)
	}

	const mods: Mods = {
		[cls.readonly]: readonly,
		[cls.focused]: isFocused,
		[cls.withAddonLeft]: Boolean(addonLeft),
		[cls.withAddonRight]: Boolean(addonRight),
	}

	const extra: (string | undefined)[] = [className, cls[size], cls[variant]]

	return (
		<div className={classNames(cls.InputWrapper, mods, extra)}>
			{addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
			<input
				ref={ref}
				type={type}
				value={value}
				onChange={onChangeHandler}
				className={cls.input}
				onFocus={onFocus}
				onBlur={onBlur}
				readOnly={readonly}
				placeholder={placeholder}
				{...otherProps}
			/>
			{addonRight && <div className={cls.addonRight}>{addonRight}</div>}
		</div>
	)
})
