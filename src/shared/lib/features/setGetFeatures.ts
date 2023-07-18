import { FeatureFlags } from '@/shared/types/featureFlags'

const LOCAL_STORAGE_IS_REDESIGNED_KEY = 'isRedesigned'

let featureFlags: FeatureFlags = {}

{
	try {
		const storageValue = localStorage.getItem(LOCAL_STORAGE_IS_REDESIGNED_KEY)
		featureFlags['isAppRedesigned'] = storageValue === 'true' || storageValue === null
	} catch (e) {
		console.log(e)
	}
}

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
	if (newFeatureFlags) {
		featureFlags = newFeatureFlags
		localStorage.setItem(
			LOCAL_STORAGE_IS_REDESIGNED_KEY,
			JSON.stringify(newFeatureFlags.isAppRedesigned)
		)
	}
}

export const getFeatureFlag = (flag: keyof FeatureFlags) => {
	if (flag === 'isAppRedesigned') {
		return featureFlags[flag] ?? true
	}
	return featureFlags[flag]
}

export const getAllFeatureFlags = () => featureFlags
