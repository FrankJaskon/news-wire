import { EntityState } from '@reduxjs/toolkit'
import { ArticleType, ViewVariantType } from '@/entities/Article'
import { ArticlesTypesType } from '@/entities/ArticleTypeTabs'
import { SortVariantType } from '@/entities/SortSelector'
import { SortOrderType } from '@/shared/types/types'

export interface ArticleInfiniteListScheme extends EntityState<ArticleType> {
	isLoading: boolean
	error?: string
	_initialized: boolean
	_mounted?: boolean
	// pagination
	page: number
	limit: number
	hasMore: boolean
	// filters
	view: ViewVariantType
	search?: string
	order: SortOrderType
	sort: SortVariantType
	filter: ArticlesTypesType
}
