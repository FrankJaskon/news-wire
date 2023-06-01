import { FC, memo } from 'react'
import { getProfileRoute } from '@/shared/const/RoutPaths'
import classNames from '@/shared/lib/classNames/classNames'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { CommentType } from '../../../model/types/comment'
import cls from './CommentCard.module.scss'

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
				<HStack className={classNames('', {}, [className])} gap='12'>
					<Skeleton height={50} width={50} border='50%' />
					<VStack align='start' gap='12'>
						<Skeleton height={20} width={80} className={cls.userName} />
						<Skeleton height={40} width={400} />
					</VStack>
				</HStack>
			</AppCard>
		)
	}

	if (!comment) {
		return null
	}

	return (
		<HStack className={classNames('', {}, [className])} gap='16' data-testid={dataTestId}>
			<AppLink to={getProfileRoute(comment?.profile.id)}>
				<Avatar size={32} src={comment?.profile?.avatar} />
			</AppLink>
			<AppText text={comment?.text} />
		</HStack>
	)
})
