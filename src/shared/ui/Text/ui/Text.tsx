import { FC, memo } from 'react'
import { ValueOf } from 'shared/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'


interface TextProps {
	className?: string
	title?: string
	content?: string
	variant?: TextVariantType
	size?: TextSizeType
	align?: TextAlignType
	titleColor?: TextColorType
	contentColor?: TextColorType
}

export const TextVariant = {
	PRIMARY: 'primary',
	ERROR: 'error',
} as const

export const TextSize = {
	S: 'size-s',
	M: 'size-m',
	L: 'size-l',
	XL: 'size-xl'
} as const

export const TextAlign = {
	CENTER: 'center',
	START: 'start',
	END: 'end',
	JUSTIFY: 'justify'

} as const

export const TextColor = {
	PRIMARY: 'primary-color',
	SECONDARY: 'secondary-color',
	LIGHT: 'light-color',

} as const

export type TextVariantType = ValueOf<typeof TextVariant>
export type TextSizeType = ValueOf<typeof TextSize>
export type TextAlignType = ValueOf<typeof TextAlign>
export type TextColorType = ValueOf<typeof TextColor>

export const Text: FC<TextProps> = memo((props: TextProps) => {
	const {
		className,
		title,
		content,
		variant = TextVariant.PRIMARY,
		align = TextAlign.START,
		size = TextSize.M,
		titleColor = TextColor.PRIMARY,
		contentColor = TextColor.SECONDARY
	} = props

	const extra = [
		className,
		cls[variant],
		cls[align],
		cls[size]
	]

	return <div
		data-testid='text-block'
		className={classNames(cls.Text, {}, extra)}>
		{title && <p
			data-testid='text-title'
			className={classNames(cls.title, {}, [cls[titleColor]])}>
			{title}
		</p>}
		{content && <p
			data-testid='text-content'
			className={classNames(cls.content, {}, [cls[contentColor]])}>
			{content}
		</p>}
	</div>
})