import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useAuthByUsernameIsLoading, getAuthByUsernameIsLoading] = buildSelector(
	(state: StateSchema) => state?.login?.isLoading ?? false
)
