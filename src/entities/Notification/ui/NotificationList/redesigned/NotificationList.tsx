import { FC } from 'react'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { useNotifications } from '../../../api/notificationApi'
import { NotificationItem } from '../../NotificationItem/NotificationItem'

export interface NotificationListProps {
	className?: string
}

export const NotificationList: FC<NotificationListProps> = props => {
	const { className } = props
	const { data: notifications, isLoading } = useNotifications(null, {
		pollingInterval: 10000,
	})

	if (isLoading) {
		return (
			<VStack gap='8'>
				{new Array(3).fill(true).map((_, index) => (
					<Skeleton key={index} height={80} />
				))}
			</VStack>
		)
	}

	return (
		<VStack className={className} gap='8'>
			{notifications?.map(item => (
				<NotificationItem notification={item} key={item.id} />
			))}
		</VStack>
	)
}
