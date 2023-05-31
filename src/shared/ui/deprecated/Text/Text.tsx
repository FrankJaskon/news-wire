import { FC, memo, useMemo } from 'react'
import { TextColor, TextColorType } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types/types'
import cls from './Text.module.scss'

interface TextProps {
	className?: string
	title?: string
	content?: string
	variant?: TextVariantType
	size?: TextSizeType
	align?: TextAlignType
	style?: TextStyleType
	weight?: TextWeightType
	titleHue?: TextColorType
	contentHue?: TextColorType
	titleElement?: ElementType
	contentElement?: ElementType
	'data-testid'?: string
	nowrap?: boolean
	transform?: 'uppercase' | 'lowercase'
}

export const TextVariant = {
	PRIMARY: 'primary',
	ERROR: 'error',
} as const

export const TextSize = {
	S: 'size-s',
	M: 'size-m',
	L: 'size-l',
	XL: 'size-xl',
} as const

export const TextAlign = {
	CENTER: 'center',
	START: 'start',
	END: 'end',
	JUSTIFY: 'justify',
} as const

export const TextStyle = {
	ITALIC: 'italic',
	NORMAL: 'normal',
} as const

export const TextWeight = {
	THICK: 'thick',
	NORMAL: 'normal',
	BOLD: 'bold',
	BOLDER: 'bolder',
} as const

export type TextVariantType = ValueOf<typeof TextVariant>
export type TextSizeType = ValueOf<typeof TextSize>
export type TextAlignType = ValueOf<typeof TextAlign>
export type TextStyleType = ValueOf<typeof TextStyle>
export type TextWeightType = ValueOf<typeof TextWeight>
export type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h6' | 'span' | 'div' | 'p'

/**
 * This component was deprecated. It is recommended to use component from the redesigned folder
 * @deprecated
 */

export const Text: FC<TextProps> = memo((props: TextProps) => {
	const {
		className,
		title,
		content,
		variant = TextVariant.PRIMARY,
		align = TextAlign.START,
		size = TextSize.M,
		titleHue = TextColor.PRIMARY,
		contentHue = TextColor.SECONDARY,
		style = TextStyle.NORMAL,
		weight = TextWeight.NORMAL,
		titleElement = 'h3',
		contentElement = 'p',
		'data-testid': dataTestId = 'Text',
		nowrap = false,
		transform,
	} = props

	const extra = useMemo(
		() => [
			className,
			cls[variant],
			cls[align],
			cls[size],
			transform && cls[transform],
			cls[style],
			cls[weight],
		],
		[className, variant, align, size, transform, style, weight]
	)

	const TitleTag = useMemo(() => titleElement, [titleElement])
	const ContentTag = useMemo(() => contentElement, [contentElement])

	return (
		<div
			data-testid={dataTestId}
			className={classNames(
				cls.Text,
				{
					[cls.nowrap]: nowrap,
				},
				extra
			)}
		>
			{title && (
				<TitleTag
					data-testid={`${dataTestId}.title`}
					className={classNames(cls.title, {}, [titleHue])}
				>
					{title}
				</TitleTag>
			)}
			{content && (
				<ContentTag
					data-testid={`${dataTestId}.content`}
					className={classNames(cls.content, {}, [contentHue])}
				>
					{content}
				</ContentTag>
			)}
		</div>
	)
})
