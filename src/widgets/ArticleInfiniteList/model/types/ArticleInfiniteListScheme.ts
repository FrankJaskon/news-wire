import { EntityState } from '@reduxjs/toolkit'
import { ArticleType, ViewVariantType } from '@/entities/Article'
import { SortVariantType } from '@/entities/SortSelector'
import { SortOrderType } from '@/shared/types/types'
import { ArticlesTypesType } from '../../ui/ArticleTypeTabs'

export interface ArticleInfiniteListScheme extends EntityState<ArticleType> {
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
	sort: SortVariantType
	filter: ArticlesTypesType
}
