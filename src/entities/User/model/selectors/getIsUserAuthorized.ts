import { StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/lib/store'

export const [useIsUserAuthorized, getIsUserAuthorized] = buildSelector((state: StateSchema) =>
	Boolean(state?.user?.authData)
)
