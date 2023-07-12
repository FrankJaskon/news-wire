import { FC, ReactNode, memo } from 'react'
import { LinkProps } from 'react-router-dom'
import classNames from '@/shared/lib/classNames/classNames'
import { AppLink } from '../AppLink/AppLink'
import { Avatar } from '../Avatar'
import { HStack } from '../HStack'
import cls from './LinkAvatarListItem.module.scss'

export interface LinkAvatarListItemProps {
	className?: string
	to?: LinkProps['to']
	avatar?: string
	content?: ReactNode
}

export const LinkAvatarListItem: FC<LinkAvatarListItemProps> = memo(
	(props: LinkAvatarListItemProps) => {
		const { className, to, avatar, content } = props

		return (
			<AppLink to={to} className={classNames(cls.link, {}, [className])}>
				<HStack gap='8' align='start'>
					{avatar && <Avatar size={32} src={avatar} />}
					{content}
				</HStack>
			</AppLink>
		)
	}
)
