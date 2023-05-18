import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useEditableProfileCardIsLoading, getEditableProfileCardIsLoading] = buildSelector(
	(state: StateSchema) => state?.profile?.isLoading ?? true
)
