import { FC } from 'react'
import cls from './NotificationPopup.module.scss'
import NotificationIcon from '@/shared/assets/icons/notifications.svg'
import { Popover } from '@/shared/ui/Popups'
import { AppIcon, AppIconVariant } from '@/shared/ui/AppIcon'
import { NotificationList } from '@/entities/Notification'
import classNames from '@/shared/lib/classNames/classNames'

interface NotificationPopupProps {
	className?: string
}

export const NotificationPopup: FC<NotificationPopupProps> = (props) => {
	const {
		className
	} = props

	return <Popover
		trigger={
			<AppIcon
				Svg={NotificationIcon}
				variant={AppIconVariant.CONTRAST}
			/>
		}
		direction='bottom left'
		className={classNames(cls.NotificationPopup, {}, [className])}
		unmount={false}
	>
		<div className={cls.listWrapper}>
			<NotificationList />
		</div>
	</Popover>
}