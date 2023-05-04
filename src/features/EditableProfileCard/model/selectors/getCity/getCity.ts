import type { StateSchema } from '@/app/providers/StoreProvider'

export const getCity = (state: StateSchema) => state.profile?.data?.city || ''