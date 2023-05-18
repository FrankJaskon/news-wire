import { buildSelector } from '@/shared/lib/store'
import type { StateSchema } from '@/app/providers/StoreProvider'

export const [useEditableProfileCardLoadingError, getEditableProfileCardLoadingError] =
	buildSelector((state: StateSchema) => state.profile?.loadingError)
