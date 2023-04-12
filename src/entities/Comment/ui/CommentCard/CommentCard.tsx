import { CommentType } from '../../model/types/comment'
import { FC, memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text, TextSize } from 'shared/ui/Text'
import { Avatar } from 'shared/ui/Avatar'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'
import { HStack, VStack } from 'shared/ui/Stack'
import { AppCard } from 'shared/ui/AppCard'

export interface CommentCardProps {
	className?: string
	comment?: CommentType
	isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
	const {
		className,
		comment,
		isLoading
	} = props

	if (isLoading) {
		return <AppCard>
			<HStack
				className={classNames('', {}, [className])}
				gap='12'
			>
				<Skeleton
					height={50}
					width={50}
					borderRadius='50%'
				/>
				<VStack
					align='start'
					gap='12'
				>
					<Skeleton
						height={20}
						width={80}
						className={cls.userName}
					/>
					<Skeleton
						height={40}
						width={400}
					/>
				</VStack>
			</HStack>
		</AppCard>
	}

	if (!comment) {
		return null
	}

	return (
		<AppCard>
			<HStack
				className={classNames('', {}, [className])}
				gap='12'
			>
				<AppLink
					className={cls.avatarWrapper}
					to={`${RoutePaths.profiles}${Number(comment?.profile.id)}`}
				>
					<Avatar
						size={50}
						src={comment?.profile?.avatar}
					/>
				</AppLink>
				<VStack
					align='start'
					justify='between'
				>
					<AppLink
						to={`${RoutePaths.profiles}${Number(comment?.profile.id)}`}
					>
						<Text
							title={comment?.profile.username}
							size={TextSize.S}
						/>
					</AppLink>
					<Text content={comment?.text} />
				</VStack>
			</HStack>
		</AppCard>
	)
})