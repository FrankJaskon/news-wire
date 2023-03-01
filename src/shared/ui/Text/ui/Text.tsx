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

export type TextVariantType = ValueOf<typeof TextVariant>
export type TextSizeType = ValueOf<typeof TextSize>

export const Text: FC<TextProps> = memo((props: TextProps) => {
	const {
		className,
		title,
		content,
		variant = TextVariant.PRIMARY
	} = props

	return <div
		data-testid='text-block'
		className={classNames(cls.Text, {}, [className, cls[variant]])}>
		{title && <p
			data-testid='text-title'
			className={cls.title}>{title}</p>}
		{content && <p
			data-testid='text-content'
			className={cls.content}>{content}</p>}
	</div>
})