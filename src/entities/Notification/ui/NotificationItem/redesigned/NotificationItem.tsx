import { FC, ReactNode, useMemo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppText } from '@/shared/ui/redesigned/AppText'
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
			<AppCard className={classNames(cls.NotificationItem, {}, [className])}>
				<VStack gap='8'>
					<AppText title={title} />
					<AppText text={description} />
				</VStack>
			</AppCard>
		),
		[title, description, className]
	)

	if (href) {
		content = (
			<a href={href} target='_blank' rel='noreferrer' className={cls.link}>
				{content}
			</a>
		)
	}

	return content
}
