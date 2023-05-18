import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useAuthByUsernamePassword, getAuthByUsernamePassword] = buildSelector(
	(state: StateSchema) => state?.login?.password ?? ''
)
