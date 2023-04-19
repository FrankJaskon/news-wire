import { FC, ReactNode, useMemo } from 'react'
import { NotificationType } from '../../model/types/notifications'
import { VStack } from 'shared/ui/Stack'
import { Text, TextSize } from 'shared/ui/Text'
import { AppCard } from 'shared/ui/AppCard'
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import classNames from 'shared/lib/classNames/classNames'
import cls from './NotificationItem.module.scss'

interface NotificationItemProps {
	className?: string
	notification: NotificationType
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
	const {
		className,
		notification: {
			description,
			id,
			title,
			userId,
			href
		}
	} = props

	let content: ReactNode = useMemo(() => <AppCard>
		<Text
			title={title}
			content={description}
			size={TextSize.S}
			nowrap
		/>
	</AppCard>, [title, description])

	if (href) {
		content = <AppLink
			to={href}
			variant={AppLinkVariant.CLEAR}
			target='_blank'
		>
			{content}
		</AppLink>
	}

	return <VStack
		className={classNames(cls.NotificationItem, {}, [className])}
		gap='12'
	>
		{content}
	</VStack>
}