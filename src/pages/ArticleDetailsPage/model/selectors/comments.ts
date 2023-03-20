import type { StateSchema } from 'app/providers/StoreProvider'

export const getIsLoading = (state: StateSchema) => (
	state?.articleDetailsComments?.isLoading !== undefined ? state?.articleDetailsComments?.isLoading : true
)
export const getError = (state: StateSchema) => state?.articleDetailsComments?.error