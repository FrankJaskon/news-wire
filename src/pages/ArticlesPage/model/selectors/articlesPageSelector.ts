import { StateSchema } from 'app/providers/StoreProvider'

export const getIsLoading = (state: StateSchema) => state?.articlesPage?.isLoading
export const getView = (state: StateSchema) => state?.articlesPage?.view
export const getError = (state: StateSchema) => state?.articlesPage?.error