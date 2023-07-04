import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { NotificationList } from '@/entities/Notification'
import NotificationIcon from '@/shared/assets/icons/notification-icon.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { Popover } from '@/shared/ui/redesigned/Popups'
import { AppTooltip } from '@/shared/ui/redesigned/Tooltip/AppTooltip'
import cls from './NotificationPopup.module.scss'

interface NotificationPopupProps {
	className?: string
}

export const NotificationPopup: FC<NotificationPopupProps> = props => {
	const { className } = props
	const { t } = useTranslation()

	return (
		<Popover
			trigger={
				<AppTooltip tooltip={t('tooltips.navbar.notifications')}>
					<AppIcon Svg={NotificationIcon} width={18} height={18} />
				</AppTooltip>
			}
			direction='bottom left'
			className={classNames('', {}, [className])}
		>
			<div className={cls.notifications}>
				<NotificationList />
			</div>
		</Popover>
	)
}
