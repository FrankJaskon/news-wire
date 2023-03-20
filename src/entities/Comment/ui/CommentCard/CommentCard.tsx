import { CommentType } from '../../model/types/comment'
import { FC, memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { Skeleton } from 'shared/ui/Skeleton'
import { Text, TextSize } from 'shared/ui/Text'
import { Avatar, AvatarVariant } from 'shared/ui/Avatar'

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
			<div className={cls.contentWrapper}>
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

	return (
		<div className={classNames(cls.CommentCard, {}, [className])}>
			<Avatar
				size={50}
				src={comment?.user?.avatar}
				variant={AvatarVariant.CIRCLE}
				className={cls.avatar}
			/>
			<div className={cls.contentWrapper}>
				<Text
					title={comment?.user.username}
					size={TextSize.S}
				/>
				<Text content={comment?.text} />
			</div>
		</div>
	)
})