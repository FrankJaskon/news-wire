import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => (
	state?.articleDetailsComments?.isLoading ?? true
)
export const getArticleDetailsCommentsError = (state: StateSchema) => state?.articleDetailsComments?.error