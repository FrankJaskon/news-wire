import {
	ChangeEvent,
	FC,
	memo,
	TextareaHTMLAttributes,
	useEffect,
	useRef
} from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppTextArea.module.scss'
import { AppCard } from '../../../AppCard'

export interface AppTextAreaProps extends Omit<
	TextareaHTMLAttributes<HTMLTextAreaElement>,
	'value' | 'onChange' | 'readOnly'
> {
	value?: string | number
	onChange?: (value: string) => void
	readonly?: boolean
	minHeight?: number
	maxHeight?: number
}

export const AppTextArea: FC<AppTextAreaProps> = memo((props: AppTextAreaProps) => {
	const {
		className,
		value,
		onChange,
		readonly = false,
		minHeight = 50,
		maxHeight = 200,
		...extraProps
	} = props

	const textareaRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.style.height = `${minHeight}px`
			const scrollHeight = textareaRef.current.scrollHeight
			textareaRef.current.style.height = `${scrollHeight}px`
		}
	}, [minHeight, value])

	const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(e.target.value)
	}

	const mods = {
		[cls.readonly]: readonly
	}

	const extra = [
		className,
	]

	return <AppCard
		noPaddings
	>
		<textarea
			ref={textareaRef}
			className={classNames(cls.AppTextArea, mods, extra)}
			style={{
				minHeight,
				maxHeight
			}}
			value={value}
			onChange={onChangeHandler}
			readOnly={readonly}
			{...extraProps}
		/>
	</AppCard>
})