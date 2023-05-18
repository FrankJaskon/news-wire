import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useEditableProfileCardProfileForm, getEditableProfileCardProfileForm] = buildSelector(
	(state: StateSchema) => state?.profile?.form
)
