import { FC, memo } from 'react'
import { getProfileRoute } from '@/shared/const/RoutPaths'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { CommentType } from '../../../model/types/comment'

export interface CommentCardProps {
	className?: string
	comment?: CommentType
	isLoading?: boolean
	'data-testid'?: string
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
	const {
		className,
		comment,
		isLoading,
		'data-testid': dataTestId = 'comments-list-item',
	} = props

	if (isLoading) {
		return (
			<AppCard>
				<HStack className={className} gap='16' innerWidth='no-shrink'>
					<Skeleton height={32} width={32} border='50%' />
					<VStack gap='8'>
						<Skeleton height={20} width={'20%'} />
						<Skeleton height={40} width={'80%'} />
					</VStack>
				</HStack>
			</AppCard>
		)
	}

	if (!comment) {
		return null
	}

	return (
		<HStack className={className} gap='16' data-testid={dataTestId}>
			<AppLink to={getProfileRoute(comment?.profile.id)}>
				<Avatar size={32} src={comment?.profile?.avatar} />
			</AppLink>
			<VStack gap='8'>
				<AppLink to={getProfileRoute(comment?.profile.id)}>
					<AppText text={comment?.profile?.username} weight='bold' />
				</AppLink>
				<AppText text={comment?.text} />
			</VStack>
		</HStack>
	)
})
