import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useEditableProfileCardReadonly, getEditableProfileCardReadonly] = buildSelector(
	(state: StateSchema) =>
		state?.profile?.readonly === undefined ? true : state?.profile?.readonly
)
