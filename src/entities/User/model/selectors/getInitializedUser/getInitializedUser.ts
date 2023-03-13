import type { StateSchema } from 'app/providers/StoreProvider'

export const getInitializedUser = (state: StateSchema) => state?.user?._initialized || false