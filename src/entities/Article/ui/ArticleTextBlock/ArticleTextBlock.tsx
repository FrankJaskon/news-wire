import { FC, memo, useMemo } from 'react'
import { TextColor } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize, TextWeight } from '@/shared/ui/Text'
import cls from './ArticleTextBlock.module.scss'

export interface ArticleTextBlockProps {
	className?: string
	paragraphs?: string[]
	title?: string
	readonly?: boolean
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props: ArticleTextBlockProps) => {
	const { className, paragraphs, title, readonly = true } = props
	const content = useMemo(() => {
		return paragraphs?.map((paragraph, index) => (
			<Text
				className={cls.paragraph}
				content={paragraph}
				key={`paragraph-${index}-${paragraph}`}
				align='justify'
			/>
		))
	}, [paragraphs])

	return (
		<VStack className={classNames('', {}, [className])} gap='12'>
			{title && (
				<Text
					title={title}
					size={TextSize.S}
					titleHue={TextColor.SECONDARY}
					weight={TextWeight.BOLDER}
				/>
			)}
			{content}
		</VStack>
	)
})
