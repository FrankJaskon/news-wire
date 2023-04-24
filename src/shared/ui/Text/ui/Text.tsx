import { FC, memo, useMemo } from 'react'
import { ValueOf } from '@/shared/types/types'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './Text.module.scss'
import { TextColor, TextColorType } from '@/shared/const/consts'

interface TextProps {
	className?: string
	title?: string
	content?: string
	variant?: TextVariantType
	size?: TextSizeType
	align?: TextAlignType
	titleHue?: TextColorType
	contentHue?: TextColorType
	titleElement?: ElementType
	contentElement?: ElementType
	'data-testid'?: string
	nowrap?: boolean
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

export type TextVariantType = ValueOf<typeof TextVariant>
export type TextSizeType = ValueOf<typeof TextSize>
export type TextAlignType = ValueOf<typeof TextAlign>
export type ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h6' | 'span' | 'div' | 'p'

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
		titleElement = 'h3',
		contentElement = 'p',
		'data-testid': dataTestId = 'Text',
		nowrap = false
	} = props

	const extra = [
		className,
		cls[variant],
		cls[align],
		cls[size],
	]

	const TitleTag = useMemo(() => titleElement, [titleElement])
	const ContentTag = useMemo(() => contentElement, [contentElement])

	return <div
		data-testid={dataTestId}
		className={classNames(
			cls.Text,
			{
				[cls.nowrap]: nowrap
			},
			extra
		)}>
		{title && <TitleTag
			data-testid={`${dataTestId}.title`}
			className={classNames(cls.title, {}, [titleHue])}>
			{title}
		</TitleTag>}
		{content && <ContentTag
			data-testid={`${dataTestId}.content`}
			className={classNames(cls.content, {}, [contentHue])}>
			{content}
		</ContentTag>}
	</div>
})