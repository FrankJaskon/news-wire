import { ChangeEvent, FC, memo, ReactNode, useCallback, useMemo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption {
	value: string
	label: string
}

export interface SelectProps {
	className?: string
	name?: string
	Label?: ReactNode
	options?: SelectOption[]
	value?: string
	onChange?: (value: string) => void
	readonly?: boolean
}

export const Select: FC<SelectProps> = memo(({
	className,
	name,
	Label,
	options,
	value,
	onChange,
	readonly = true
}: SelectProps) => {

	const handleOnChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(e.target.value)
	}, [onChange])

	const optionsList = useMemo(() => {
		return options?.map((optionItem) => (
			<option
				key={optionItem.value}
				value={optionItem.value}
			>
				{optionItem.label}
			</option>
		))
	}, [options])

	return (
		<div className={classNames(cls.Select, {}, [className])}>
			{Label}
			<select
				disabled={readonly}
				className={classNames(cls.selectItem)}
				id={name}
				name={name}
				value={value}
				onChange={handleOnChange}
			>
				{optionsList}
			</select>
		</div>
	)
})