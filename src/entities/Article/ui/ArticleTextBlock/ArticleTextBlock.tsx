import { FC, memo, useMemo } from 'react'
import { TextColor } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'
import cls from './ArticleTextBlock.module.scss'

export interface ArticleTextBlockProps {
	className?: string
	paragraphs?: string[]
	title?: string
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props: ArticleTextBlockProps) => {
	const { className, paragraphs, title } = props

	const content = useMemo(
		() =>
			paragraphs?.map(p => (
				<Text className={cls.paragraph} content={p} key={p} align='justify' />
			)),
		[paragraphs]
	)

	return (
		<VStack className={classNames('', {}, [className])} gap='12'>
			{title && <Text title={title} size={TextSize.S} titleHue={TextColor.SECONDARY} />}
			{content}
		</VStack>
	)
})
