import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useEditableProfileCardValidateError, getEditableProfileCardValidateError] =
	buildSelector((state: StateSchema) => state.profile?.validateError)
