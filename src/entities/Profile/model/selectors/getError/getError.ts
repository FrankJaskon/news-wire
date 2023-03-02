import type { StateSchema } from 'app/providers/StoreProvider'

export const getError = (state: StateSchema) => state.profile?.error || ''