import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { NotificationPopup as NotificationPopupDeprecated } from './deprecated/NotificationPopup'
import { NotificationPopup as NotificationPopupRedesigned } from './redesigned/NotificationPopup'

interface NotificationPopupProps {
	className?: string
}

export const NotificationPopup: FC<NotificationPopupProps> = memo(
	(props: NotificationPopupProps) => {
		const { className } = props

		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<NotificationPopupRedesigned className={className} />}
				off={<NotificationPopupDeprecated className={className} />}
			/>
		)
	}
)
