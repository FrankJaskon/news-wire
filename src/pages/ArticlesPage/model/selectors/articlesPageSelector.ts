import { StateSchema } from 'app/providers/StoreProvider'
import { ArticlesTypes } from 'features/ArticleTypeTabs'

export const getIsLoading = (state: StateSchema) => (
	state?.articlesPage?.isLoading !== undefined ? state?.articlesPage?.isLoading : true
)
export const getView = (state: StateSchema) => state?.articlesPage?.view
export const getPage = (state: StateSchema) => state?.articlesPage?.page || 1
export const getLimit = (state: StateSchema) => state?.articlesPage?.limit
export const getHasMore = (state: StateSchema) => state?.articlesPage?.hasMore
export const getError = (state: StateSchema) => state?.articlesPage?.error
export const geInitialized = (state: StateSchema) => state?.articlesPage?._initialized || false
export const getSearch = (state: StateSchema) => state?.articlesPage?.search ?? ''
export const getOrder = (state: StateSchema) => state?.articlesPage?.order
export const getSort = (state: StateSchema) => state?.articlesPage?.sort
export const getFilter = (state: StateSchema) => state?.articlesPage?.filter || ArticlesTypes.ALL