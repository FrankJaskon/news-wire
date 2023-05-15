import type { StateSchema } from '@/app/providers/StoreProvider'

export const getAge = (state: StateSchema) => state?.profile?.data?.age ?? ''