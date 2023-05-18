import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useNewCommentText, getNewCommentText] = buildSelector(
	(state: StateSchema) => state?.addNewComment?.text ?? ''
)
