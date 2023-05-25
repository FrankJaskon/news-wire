import { FC } from 'react'
import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification-icon.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { Popover } from '@/shared/ui/redesigned/Popups'
import cls from './NotificationPopup.module.scss'

interface NotificationPopupProps {
	className?: string
}

export const NotificationPopup: FC<NotificationPopupProps> = props => {
	const { className } = props

	return (
		<Popover
			trigger={<AppIcon Svg={NotificationIcon} width={18} height={18} />}
			direction='bottom left'
			className={classNames('', {}, [className])}
		>
			<div className={cls.notifications}>
				<NotificationList />
			</div>
		</Popover>
	)
}
