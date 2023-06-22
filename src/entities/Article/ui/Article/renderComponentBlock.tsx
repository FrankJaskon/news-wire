import { YouTubeVideo } from '@/shared/ui/redesigned/YouTubeVideo/YouTubeVideo'
import { ArticleBlockType } from '../../model/types/Article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'

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
		case 'VIDEO':
			return <YouTubeVideo key={`article-block-${block.id}`} src={block.src} />
		default:
			return null
	}
}
