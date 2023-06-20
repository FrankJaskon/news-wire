import { FC, memo } from 'react'
import { getProfileRoute } from '@/shared/const/RoutPaths'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { HStack } from '@/shared/ui/redesigned/HStack'

export interface ClickableAvatarProps {
	className?: string
	id: number
	avatar?: string
	username?: string
}

export const ClickableAvatar: FC<ClickableAvatarProps> = memo((props: ClickableAvatarProps) => {
	const { className, id, avatar, username } = props

	return (
		<HStack gap='8' align='center' className={className}>
			<AppLink to={getProfileRoute(id)} flex>
				<Avatar size={32} src={avatar} />
			</AppLink>
			<AppLink to={getProfileRoute(id)} flex>
				<AppText text={username} weight='bold' />
			</AppLink>
		</HStack>
	)
})
