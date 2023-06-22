import { FC, memo } from 'react'
import { getArticleDetailsRoute, getProfileRoute } from '@/shared/const/RoutPaths'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { LinkAvatarListItem } from '@/shared/ui/redesigned/LinkAvatarListItem/LinkAvatarListItem'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { CommentType } from '../../../model/types/comment'

export type CommentVariant = 'user' | 'article'

export interface CommentCardProps {
	className?: string
	comment?: CommentType
	isLoading?: boolean
	'data-testid'?: string
	variant?: CommentVariant
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
	const {
		className,
		comment,
		isLoading,
		'data-testid': dataTestId = 'comments-list-item',
		variant = 'user',
	} = props

	if (isLoading) {
		if (variant === 'user') {
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
		return (
			<AppCard>
				<HStack className={className} gap='16' innerWidth='no-shrink'>
					<Skeleton height={32} width={32} border='50%' />
					<Skeleton height={32} width={'80%'} />
				</HStack>
			</AppCard>
		)
	}

	if (comment?.profile && variant === 'user') {
		return (
			<HStack className={className} gap='16' data-testid={dataTestId} id={String(comment.id)}>
				<AppLink to={getProfileRoute(comment?.profile.id)}>
					{comment?.profile?.avatar && (
						<Avatar size={32} src={comment?.profile?.avatar} />
					)}
				</AppLink>
				<VStack gap='8'>
					<AppLink to={getProfileRoute(comment?.profile.id)}>
						<AppText text={comment?.profile?.username} weight='bold' />
					</AppLink>
					<AppText text={comment?.text} />
				</VStack>
			</HStack>
		)
	}

	if (comment?.article?.id && variant === 'article') {
		return (
			<LinkAvatarListItem
				to={{
					pathname: getArticleDetailsRoute(comment?.article.id),
					search: `?commentId=${comment.id}`,
				}}
				avatar={comment?.article?.img}
				content={<AppText text={comment?.text} />}
			/>
		)
	}

	return null
})
