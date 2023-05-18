import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useAuthByUsernameLogin, getAuthByUsernameLogin] = buildSelector(
	(state: StateSchema) => state?.login ?? {}
)
