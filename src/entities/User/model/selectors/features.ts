import { StateSchema } from '@/app/providers/StoreProvider'
import { buildSelector } from '@/shared/lib/store'
import { FeatureFlags } from '@/shared/types/featureFlags'

export const [useUserFeatures, getUserFeatures] = buildSelector(
	(state: StateSchema) => state?.user?.authData?.features
)

export const [useUserFeatureByKey, getUserFeatureByKey] = buildSelector(
	(state: StateSchema, key: keyof FeatureFlags) => state?.user?.authData?.features?.[key]
)
