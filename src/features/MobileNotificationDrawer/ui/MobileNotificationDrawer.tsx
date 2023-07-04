import { FC, useCallback, useState } from 'react'
import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification-icon.svg'
import NotificationIconDeprecated from '@/shared/assets/icons/notifications.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { ToggleFeatures } from '@/shared/lib/features'
import { AppButton as AppButtonDeprecated, ButtonVariant } from '@/shared/ui/deprecated/AppButton'
import { AppIcon as AppIconDeprecated, AppIconVariant } from '@/shared/ui/deprecated/AppIcon'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { Drawer } from '@/shared/ui/redesigned/Drawer/Drawer'
import cls from './MobileNotificationDrawer.module.scss'

interface MobileNotificationDrawerProps {
	className?: string
}

export const MobileNotificationDrawer: FC<MobileNotificationDrawerProps> = props => {
	const { className } = props
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const handleOpen = useCallback(() => {
		setIsOpen(true)
	}, [])

	const handleClose = useCallback(() => {
		setIsOpen(false)
	}, [])

	return (
		<>
			<ToggleFeatures
				feature='isAppRedesigned'
				on={
					<AppIcon
						Svg={NotificationIcon}
						width={20}
						height={20}
						clickable
						onClick={handleOpen}
					/>
				}
				off={
					<AppButtonDeprecated
						variant={ButtonVariant.CUSTOM}
						onClick={handleOpen}
						className={classNames(cls.MobileNotificationDrawer, {}, [className])}
					>
						<AppIconDeprecated
							Svg={NotificationIconDeprecated}
							variant={AppIconVariant.CONTRAST}
						/>
					</AppButtonDeprecated>
				}
			/>
			<Drawer isOpen={isOpen} onClose={handleClose}>
				<NotificationList />
			</Drawer>
		</>
	)
}
