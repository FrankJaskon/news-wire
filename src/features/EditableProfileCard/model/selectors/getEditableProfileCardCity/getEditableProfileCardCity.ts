import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useEditableProfileCardCity, getEditableProfileCardCity] = buildSelector(
	(state: StateSchema) => state.profile?.data?.city ?? ''
)
