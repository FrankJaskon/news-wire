import type { StateSchema } from 'app/providers/StoreProvider'

export const getLoadingError = (state: StateSchema) => state.profile?.loadingError