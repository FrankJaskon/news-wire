import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useInitializedUser, getInitializedUser] = buildSelector(
	(state: StateSchema) => state?.user?._initialized || false
)
