import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useEditableProfileCardAge, getEditableProfileCardAge] = buildSelector(
	(state: StateSchema) => state?.profile?.data?.age ?? ''
)
