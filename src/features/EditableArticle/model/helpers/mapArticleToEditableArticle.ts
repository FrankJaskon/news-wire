import { ArticleType, BlockType, EditableArticleBlockType } from '@/entities/Article'
import { randomInteger } from '@/shared/lib/randomInteger/randomInteger'
import { EditableArticleType } from '../types/editableArticleScheme'

export const mapArticleToEditableArticle = (article: ArticleType): EditableArticleType => {
	if (!article || !article.blocks) return {}

	const newBlocks: EditableArticleBlockType[] = article.blocks.map(block => {
		if (block.type === BlockType.TEXT) {
			return {
				...block,
				paragraphs: block.paragraphs.map(paragraph => ({
					value: paragraph,
					id: randomInteger(),
				})),
			}
		}
		return block
	})

	return {
		...article,
		isSubtitle: Boolean(article.subtitle),
		isImg: Boolean(article.img),
		blocks: newBlocks,
	}
}
