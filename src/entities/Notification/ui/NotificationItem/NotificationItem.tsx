import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { NotificationType } from '../../model/types/notifications'
import { NotificationItem as NotificationItemDeprecated } from './deprecated/NotificationItem'
import { NotificationItem as NotificationItemRedesigned } from './redesigned/NotificationItem'

interface NotificationItemProps {
	className?: string
	notification: NotificationType
}

export const NotificationItem: FC<NotificationItemProps> = memo((props: NotificationItemProps) => {
	const { className, notification } = props

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<NotificationItemRedesigned className={className} notification={notification} />}
			off={<NotificationItemDeprecated className={className} notification={notification} />}
		/>
	)
})
