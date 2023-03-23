import { CommentType } from '../../model/types/comment'
import { FC, memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text, TextSize } from 'shared/ui/Text'
import { Avatar, AvatarVariant } from 'shared/ui/Avatar'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'

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
		return <div className={classNames(cls.CommentCard, {}, [className])}>
			<Skeleton
				height={50}
				width={50}
				borderRadius='50%'
				className={cls.avatar}
			/>
			<div className={classNames(cls.contentWrapper, {}, [cls.ms10])}>
				<Skeleton
					height={20}
					width={80}
					className={cls.userName}
				/>
				<Skeleton
					height={60}
					width={400}
				/>
			</div>
		</div>
	}

	if (!comment) {
		return null
	}

	return (
		<div className={classNames(cls.CommentCard, {}, [className])}>
			<AppLink
				className={cls.avatarWrapper}
				to={`${RoutePaths.profile}${Number(comment?.user.id)}`}
			>
				<Avatar
					size={50}
					src={comment?.user?.avatar}
					variant={AvatarVariant.CIRCLE}
					className={cls.avatar}
				/>
			</AppLink>
			<div className={cls.contentWrapper}>
				<AppLink to={`${RoutePaths.profile}${Number(comment?.user.id)}`}>
					<Text
						title={comment?.user.username}
						size={TextSize.S}
					/>
				</AppLink>
				<Text content={comment?.text} />
			</div>
		</div>
	)
})