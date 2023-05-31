import { memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './AppText.module.scss'

export type TextVariant = 'primary' | 'error' | 'accent'

export type TextAlign = 'right' | 'left' | 'center'

export type TextSize = 's' | 'm' | 'l' | 'xl'

export type TextWeight = 'normal' | 'bold' | 'bolder'

interface TextProps {
	className?: string
	title?: string
	text?: string
	variant?: TextVariant
	align?: TextAlign
	size?: TextSize
	weight?: TextWeight
	'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4'

const mapSizeToClass: Record<TextSize, string> = {
	s: 'size_s',
	m: 'size_m',
	l: 'size_l',
	xl: 'size_xl',
}

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	s: 'h4',
	m: 'h3',
	l: 'h2',
	xl: 'h1',
}

export const AppText = memo((props: TextProps) => {
	const {
		className,
		text,
		title,
		variant = 'primary',
		align = 'left',
		size = 'm',
		weight = 'normal',
		'data-testid': dataTestId = 'Text',
	} = props

	const HeaderTag = mapSizeToHeaderTag[size]
	const sizeClass = mapSizeToClass[size]

	const additionalClasses = [className, cls[variant], cls[align], cls[sizeClass], cls[weight]]

	return (
		<div className={classNames(cls.AppText, {}, additionalClasses)}>
			{title && (
				<HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
					{title}
				</HeaderTag>
			)}
			{text && (
				<p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
					{text}
				</p>
			)}
		</div>
	)
})
