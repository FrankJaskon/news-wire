import {
	ArticleType,
	BlockType,
	EditableArticleBlockType,
	EditableParagraph,
} from '@/entities/Article'
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
				hasTitle: Boolean(block.title),
			} as EditableParagraph
		}
		if (block.type === BlockType.IMAGE) {
			return {
				...block,
				hasTitle: Boolean(block.title),
			}
		}
		return block
	}) as EditableArticleBlockType[]

	return {
		...article,
		isSubtitle: Boolean(article.subtitle),
		isImg: Boolean(article.img),
		blocks: newBlocks,
	}
}
