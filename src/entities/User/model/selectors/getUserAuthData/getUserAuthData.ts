import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useUserAuthData, getUserAuthData] = buildSelector(
	(state: StateSchema) => state?.user?.authData
)
