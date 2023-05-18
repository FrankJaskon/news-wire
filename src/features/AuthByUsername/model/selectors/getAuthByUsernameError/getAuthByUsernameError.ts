import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useAuthByUsernameError, getAuthByUsernameError] = buildSelector(
	(state: StateSchema) => state?.login?.error ?? ''
)
