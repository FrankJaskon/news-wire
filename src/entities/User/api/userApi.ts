import { rtkApi } from '@/shared/api/rtkApi'
import { getOneUserRoute } from '@/shared/const/RoutPaths'
import { JsonSettings } from '../model/types/jsonSettings'
import { User } from '../model/types/UserScheme'

const jsonSettingsApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		setJsonSettings: build.mutation<User, { id: number; jsonSettings: JsonSettings }>({
			query: ({ id, jsonSettings }) => ({
				method: 'PATCH',
				url: getOneUserRoute(id),
				body: {
					jsonSettings,
				},
			}),
		}),
		getUserDataById: build.query<User, number>({
			query: id => ({
				url: getOneUserRoute(id),
			}),
		}),
	}),
	overrideExisting: false,
})
export const setJsonSettingsMutation = jsonSettingsApi.endpoints.setJsonSettings.initiate
export const getUserDataByIdQuery = jsonSettingsApi.endpoints.getUserDataById.initiate
