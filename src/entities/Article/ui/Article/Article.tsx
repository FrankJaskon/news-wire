import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleBlockType, ArticleType } from '../../model/types/Article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { Article as ArticleDeprecated } from './deprecated/Article'
import { Article as ArticleRedesigned } from './redesigned/Article'

export interface ArticleDetailsProps {
	className?: string
	article: ArticleType
	isLoading?: boolean
	error?: string
}

export const renderBlockContent = (block: ArticleBlockType) => {
	switch (block.type) {
		case 'IMAGE':
			return (
				<ArticleImageBlock
					key={`article-block-${block.id}`}
					src={block.src}
					title={block.title}
				/>
			)
		case 'CODE':
			return <ArticleCodeBlock key={`article-block-${block.id}`} code={block.code} />
		case 'TEXT':
			return (
				<ArticleTextBlock
					key={`article-block-${block.id}`}
					paragraphs={block.paragraphs}
					title={block.title}
				/>
			)
		default:
			return null
	}
}

export const Article: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ArticleRedesigned {...props} />}
			off={<ArticleDeprecated {...props} />}
		/>
	)
})
