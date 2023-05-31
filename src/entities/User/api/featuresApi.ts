import { rtkApi } from '@/shared/api/rtkApi'
import { getOneUserRoute } from '@/shared/const/RoutPaths'
import { FeatureFlags } from '@/shared/types/featureFlags'
import { User } from '../model/types/UserScheme'

const featuresApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		updateFeatures: build.mutation<User, { id: number; features: Partial<FeatureFlags> }>({
			query: ({ id, features }) => ({
				method: 'PATCH',
				url: getOneUserRoute(id),
				body: {
					features,
				},
			}),
		}),
	}),
	overrideExisting: false,
})

export const updateFeaturesMutation = featuresApi.endpoints.updateFeatures.initiate
