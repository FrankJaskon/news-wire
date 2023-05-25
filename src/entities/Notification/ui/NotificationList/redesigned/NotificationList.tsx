import { FC } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { useNotifications } from '../../../api/notificationApi'
import { NotificationItem } from '../../NotificationItem/NotificationItem'
import cls from './NotificationList.module.scss'

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
			<VStack className={classNames(cls.NotificationList, {}, [className])} gap='8'>
				{new Array(3).fill(true).map((_, index) => (
					<Skeleton key={index} height={80} width={250} />
				))}
			</VStack>
		)
	}

	return (
		<VStack className={classNames(cls.NotificationList, {}, [className])} gap='8'>
			{notifications?.map(item => (
				<NotificationItem notification={item} key={item.id} />
			))}
		</VStack>
	)
}
