import { FC, ReactNode, useMemo } from 'react'
import { TextColor } from '@/shared/const/consts'
import classNames from '@/shared/lib/classNames/classNames'
import { AppCard, CardVariant } from '@/shared/ui/deprecated/AppCard'
import { AppLink, AppLinkVariant } from '@/shared/ui/deprecated/AppLink/AppLink'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { NotificationType } from '../../../model/types/notifications'
import cls from './NotificationItem.module.scss'

interface NotificationItemProps {
	className?: string
	notification: NotificationType
}

export const NotificationItem: FC<NotificationItemProps> = props => {
	const {
		className,
		notification: { description, title, href },
	} = props

	let content: ReactNode = useMemo(
		() => (
			<AppCard variant={CardVariant.LIGHT}>
				<Text
					title={title}
					content={description}
					contentHue={TextColor.DARK}
					size={TextSize.S}
					nowrap
				/>
			</AppCard>
		),
		[title, description]
	)

	if (href) {
		content = (
			<AppLink to={href} variant={AppLinkVariant.CLEAR} target='_blank'>
				{content}
			</AppLink>
		)
	}

	return (
		<VStack className={classNames(cls.NotificationItem, {}, [className])} gap='12'>
			{content}
		</VStack>
	)
}
