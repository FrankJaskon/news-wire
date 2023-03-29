import { EntityState } from '@reduxjs/toolkit'
import { ArticleType, ViewVariantType } from 'entities/Article'
import { ArticlesSortVariantType } from 'features/ArticlesSortSelector'
import { ArticlesTypesType } from 'features/ArticleTypeTabs'
import { SortOrderType } from 'shared/types/types'

export interface ArticlesPageScheme extends EntityState<ArticleType>{
	isLoading: boolean
	error?: string
	_initialized: boolean
	// pagination
	page: number
	limit: number
	hasMore: boolean
	// filters
	view: ViewVariantType
	search?: string
	order: SortOrderType
	sort: ArticlesSortVariantType
	filter: ArticlesTypesType
}