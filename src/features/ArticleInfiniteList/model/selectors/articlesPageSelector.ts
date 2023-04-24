import { StateSchema } from 'app/providers/StoreProvider'
import { ArticlesTypes } from '../../ui/ArticleTypeTabs'

export const getIsLoading = (state: StateSchema) => (
	state?.articlesInfiniteList?.isLoading !== undefined ? state?.articlesInfiniteList?.isLoading : true
)
export const getView = (state: StateSchema) => state?.articlesInfiniteList?.view
export const getPage = (state: StateSchema) => state?.articlesInfiniteList?.page || 1
export const getLimit = (state: StateSchema) => state?.articlesInfiniteList?.limit
export const getHasMore = (state: StateSchema) => state?.articlesInfiniteList?.hasMore
export const getError = (state: StateSchema) => state?.articlesInfiniteList?.error
export const geInitialized = (state: StateSchema) => state?.articlesInfiniteList?._initialized || false
export const getSearch = (state: StateSchema) => state?.articlesInfiniteList?.search ?? ''
export const getOrder = (state: StateSchema) => state?.articlesInfiniteList?.order
export const getSort = (state: StateSchema) => state?.articlesInfiniteList?.sort
export const getFilter = (state: StateSchema) => state?.articlesInfiniteList?.filter || ArticlesTypes.ALL