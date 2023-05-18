import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useArticleDetailsCommentsIsLoading, getArticleDetailsCommentsIsLoading] =
	buildSelector((state: StateSchema) => state?.articleDetailsComments?.isLoading ?? true)
export const [useArticleDetailsCommentsError, getArticleDetailsCommentsError] = buildSelector(
	(state: StateSchema) => state?.articleDetailsComments?.error
)
