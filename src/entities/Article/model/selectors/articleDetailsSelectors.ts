import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useArticleDetailsData, getArticleDetailsData] = buildSelector(
	(state: StateSchema) => state?.articleDetails?.data
)
export const [useArticleDetailsError, getArticleDetailsError] = buildSelector(
	(state: StateSchema) => state?.articleDetails?.error
)
export const [useArticleDetailsIsLoading, getArticleDetailsIsLoading] = buildSelector(
	(state: StateSchema) =>
		state?.articleDetails?.isLoading === undefined ? true : state?.articleDetails?.isLoading
)
export const [useArticleDetailsReadonly, getArticleDetailsReadonly] = buildSelector(
	(state: StateSchema) =>
		state?.articleDetails?.readonly === undefined ? true : state?.articleDetails?.readonly
)
