import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { NotificationList as NotificationListDeprecated } from './deprecated/NotificationList'
import { NotificationList as NotificationListRedesigned } from './redesigned/NotificationList'

export interface NotificationListProps {
	className?: string
}

export const NotificationList: FC<NotificationListProps> = memo((props: NotificationListProps) => {
	const { className } = props

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<NotificationListRedesigned className={className} />}
			off={<NotificationListDeprecated className={className} />}
		/>
	)
})
