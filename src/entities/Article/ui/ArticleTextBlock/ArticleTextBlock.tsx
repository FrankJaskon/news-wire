import { FC, memo, useMemo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui/Text'
import cls from './ArticleTextBlock.module.scss'

export interface ArticleTextBlockProps {
	className?: string
	paragraphs?: string[]
	title?: string
}

export const ArticleTextBlock: FC<ArticleTextBlockProps> = memo((props: ArticleTextBlockProps) => {
	const {
		className,
		paragraphs,
		title,
	} = props

	const content = useMemo(() => (
		paragraphs?.map(p => <Text
			className={cls.paragraph}
			content={p}
			key={p}
			align='justify'
		/>)
	), [paragraphs])

	return (
		<div className={classNames(cls.ArticleTextBlock, {}, [className])}>
			{title && <Text
				title={title}
				className={cls.title}
			/>}
			{content}
		</div>
	)
})