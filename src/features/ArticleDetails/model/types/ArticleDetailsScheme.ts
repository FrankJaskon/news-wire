import { ArticleType, ValidateArticleDetailsErrorType } from '@/entities/Article'
import { CommentType } from '@/entities/Comment'

export interface ArticleDetailsScheme {
	data?: ArticleType
	error?: ValidateArticleDetailsErrorType
	isLoading?: boolean
	readonly: boolean
	comments?: CommentType[]
}
