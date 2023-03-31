import type { StateSchema } from 'app/providers/StoreProvider'

export const getIsLoading = (state: StateSchema) => (
	state?.articleDetailsPage?.comments?.isLoading ?? true
)
export const getError = (state: StateSchema) => state?.articleDetailsPage?.comments?.error