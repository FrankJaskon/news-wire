import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticlesTypes } from '@/entities/ArticleTypeTabs'
import { buildSelector } from '@/shared/lib/store'

export const [useArticleInfiniteListIsLoading, getArticleInfiniteListIsLoading] = buildSelector(
	(state: StateSchema) =>
		state?.articlesInfiniteList?.isLoading !== undefined
			? state?.articlesInfiniteList?.isLoading
			: true
)
export const [useArticleInfiniteListView, getArticleInfiniteListView] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?.view
)
export const [useArticleInfiniteListPage, getArticleInfiniteListPage] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?.page || 1
)
export const [useArticleInfiniteListLimit, getArticleInfiniteListLimit] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?.limit
)
export const [useArticleInfiniteListHasMore, getArticleInfiniteListHasMore] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?.hasMore
)
export const [useArticleInfiniteListError, getArticleInfiniteListError] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?.error
)
export const [useArticleInfiniteListInitialized, getArticleInfiniteListInitialized] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?._initialized ?? false
)
export const [useArticleInfiniteListMounted, getArticleInfiniteListMounted] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?._mounted ?? false
)
export const [useArticleInfiniteListSearch, getArticleInfiniteListSearch] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?.search ?? ''
)
export const [useArticleInfiniteListOrder, getArticleInfiniteListOrder] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?.order
)
export const [useArticleInfiniteListSort, getArticleInfiniteListSort] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?.sort
)
export const [useArticleInfiniteListFilter, getArticleInfiniteListFilter] = buildSelector(
	(state: StateSchema) => state?.articlesInfiniteList?.filter ?? ArticlesTypes.ALL
)
