import type { StateSchema } from '@/app/providers/StoreProvider'

export const getReadonly = (state: StateSchema) => (
	state?.profile?.readonly === undefined ? true : state?.profile?.readonly)