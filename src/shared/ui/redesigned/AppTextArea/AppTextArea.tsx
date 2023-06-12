import { ChangeEvent, FC, memo, TextareaHTMLAttributes, useEffect, useRef } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppTextArea.module.scss'

export interface AppTextAreaProps
	extends Omit<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		'value' | 'onChange' | 'readOnly' | 'placeholder'
	> {
	value?: string | number
	onChange?: (value: string) => void
	readonly?: boolean
	placeholder?: string
}

export const AppTextArea: FC<AppTextAreaProps> = memo((props: AppTextAreaProps) => {
	const { className, value, onChange, readonly = false, ...extraProps } = props

	const textareaRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = '20px'
			const scrollHeight = textareaRef.current.scrollHeight
			textareaRef.current.style.height = `${scrollHeight}px`
		}
	}, [value])

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(e.target.value)
	}

	const mods = {
		[cls.readonly]: readonly,
	}

	const extra = [className]

	return (
		<textarea
			ref={textareaRef}
			className={classNames(cls.AppTextArea, mods, extra)}
			value={value ?? ''}
			onChange={onChangeHandler}
			readOnly={readonly}
			{...extraProps}
		/>
	)
})
