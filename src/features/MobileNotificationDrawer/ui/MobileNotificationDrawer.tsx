import { FC, useCallback, useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './MobileNotificationDrawer.module.scss'
import NotificationIcon from 'shared/assets/icons/notifications.svg'
import { AppIcon, AppIconVariant } from 'shared/ui/AppIcon'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { NotificationList } from 'entities/Notification'
import { AppButton, ButtonVariant } from 'shared/ui/AppButton'

interface MobileNotificationDrawerProps {
	className?: string
}

export const MobileNotificationDrawer: FC<MobileNotificationDrawerProps> = (props) => {
	const { className } = props
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleOpen = useCallback(() => {
		setIsOpen(true)
	}, [])

	const handleClose = useCallback(() => {
		setIsOpen(false)
	}, [])

	return <>
		<AppButton
			variant={ButtonVariant.CUSTOM}
			onClick={handleOpen}
			className={classNames(cls.MobileNotificationDrawer, {}, [className])}
		>
			<AppIcon
				Svg={NotificationIcon}
				variant={AppIconVariant.CONTRAST}
			/>
		</AppButton>
		<Drawer
			isOpen={isOpen}
			onClose={handleClose}
		>
			<NotificationList />
		</Drawer>
	</>
}