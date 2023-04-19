import { rtkApi } from 'shared/api/rtkApi'
import { NotificationType } from '../model/types/notifications'

const notificationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getNotifications: build.query<NotificationType[], null>({
			query: () => ({
				url: '/notifications',
			}),
		}),
	}),
	overrideExisting: true,
})
export const useNotifications = notificationsApi.useGetNotificationsQuery
