import { EntityState } from '@reduxjs/toolkit'
import { ArticleType, ViewVariantType } from 'entities/Article'

export interface ArticlesPageScheme extends EntityState<ArticleType>{
	isLoading: boolean
	error?: string
	view: ViewVariantType
	page?: number
	limit?: number
	hasMore?: boolean
	_initialized: boolean
}