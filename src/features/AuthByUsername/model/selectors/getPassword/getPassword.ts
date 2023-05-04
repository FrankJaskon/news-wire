import type { StateSchema } from '@/app/providers/StoreProvider'

export const getPassword = (state: StateSchema) => state?.login?.password ?? ''