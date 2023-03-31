import type { StateSchema } from 'app/providers/StoreProvider'

export const getArticlePageRecommendationsIsLoading = (state: StateSchema) => (
	state?.articleDetailsPage?.recommendations?.isLoading ?? true
)
export const getArticlePageRecommendationsError = (state: StateSchema) => (
	state?.articleDetailsPage?.recommendations?.error
)