import { FC } from 'react'
import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notifications.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon, AppIconVariant } from '@/shared/ui/AppIcon'
import { Popover } from '@/shared/ui/Popups'
import cls from './NotificationPopup.module.scss'

interface NotificationPopupProps {
	className?: string
}

export const NotificationPopup: FC<NotificationPopupProps> = props => {
	const { className } = props

	return (
		<Popover
			trigger={<AppIcon Svg={NotificationIcon} variant={AppIconVariant.CONTRAST} />}
			direction='bottom left'
			className={classNames(cls.NotificationPopup, {}, [className])}
			unmount={false}
		>
			<div className={cls.listWrapper}>
				<NotificationList />
			</div>
		</Popover>
	)
}
