import type { StateSchema } from 'app/providers/StoreProvider'

export const getIsAuth = (state: StateSchema) => Boolean(state?.user?.authData)