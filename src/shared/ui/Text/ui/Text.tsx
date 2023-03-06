import { FC, memo } from 'react'
import { ValueOf } from 'shared/config/types/types'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'


interface TextProps {
	className?: string
	title?: string
	content?: string
	variant?: TextVariantType
	size?: TextSizeType
	align?: TextAlignType
}

export const TextVariant = {
	PRIMARY: 'primary',
	ERROR: 'error'
} as const

export const TextSize = {
	S: 's',
	M: 'm',
	L: 'l',
	XL: 'xl'
} as const

export const TextAlign = {
	CENTER: 'center',
	START: 'start',
	END: 'end',
	JUSTIFY: 'justify'

} as const

export type TextVariantType = ValueOf<typeof TextVariant>
export type TextSizeType = ValueOf<typeof TextSize>
export type TextAlignType = ValueOf<typeof TextAlign>

export const Text: FC<TextProps> = memo((props: TextProps) => {
	const {
		className,
		title,
		content,
		variant = TextVariant.PRIMARY,
		align = TextAlign.START
	} = props

	return <div
		data-testid='text-block'
		className={classNames(cls.Text, {}, [className, cls[variant], cls[align]])}>
		{title && <p
			data-testid='text-title'
			className={cls.title}>{title}</p>}
		{content && <p
			data-testid='text-content'
			className={cls.content}>{content}</p>}
	</div>
})