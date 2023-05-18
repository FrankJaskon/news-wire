import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useAuthByUsernameUsername, getAuthByUsernameUsername] = buildSelector(
	(state: StateSchema) => state?.login?.username ?? ''
)
