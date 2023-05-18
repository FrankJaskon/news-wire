import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useEditableProfileCardProfileData, getEditableProfileCardProfileData] = buildSelector(
	(state: StateSchema) => state?.profile?.data || undefined
)
