import { ArticleType, EditableArticleBlockType } from '@/entities/Article'
import { ArticleCategoriesType } from '@/entities/ArticleCategory'
import { ValidationErrorType } from '../consts/validationError'

export interface EditableArticleType {
	id?: number
	profileId?: number
	title?: string
	subtitle?: string
	img?: string
	views?: number
	createdAt?: string
	type?: ArticleCategoriesType[]
	blocks?: EditableArticleBlockType[]
	isSubtitle?: boolean
	isImg?: boolean
}

export interface EditableArticleScheme {
	error?: string
	isLoading: boolean
	data: ArticleType
	form: EditableArticleType
	isFinished?: boolean
	mode?: ViewMode
	isEdit?: boolean
	isReducerMounted?: boolean
	validationErrors?: ValidationErrorType[]
}

export type ViewMode = 'edit' | 'preview'
export type InsertDirectionType = 'start' | 'end'
