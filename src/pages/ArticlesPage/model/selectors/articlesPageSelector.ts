import { StateSchema } from 'app/providers/StoreProvider'

export const getIsLoading = (state: StateSchema) => (
	state?.articlesPage?.isLoading !== undefined ? state?.articlesPage?.isLoading : true
)
export const getView = (state: StateSchema) => state?.articlesPage?.view
export const getPage = (state: StateSchema) => state?.articlesPage?.page || 1
export const getLimit = (state: StateSchema) => state?.articlesPage?.limit
export const getHasMore = (state: StateSchema) => state?.articlesPage?.hasMore
export const getError = (state: StateSchema) => state?.articlesPage?.error
export const geInitialized = (state: StateSchema) => state?.articlesPage?._initialized