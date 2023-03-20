import { CommentType } from '../../model/types/comment'
import { FC, memo, useMemo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './CommentsList.module.scss'
import { Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'

export interface CommentsListProps {
	className?: string
	comments?: CommentType[]
	isLoading?: boolean
	error?: string
}

export const CommentsList: FC<CommentsListProps> = memo((props: CommentsListProps) => {
	const {
		className,
		comments,
		isLoading,
		error
	} = props

	const { t } = useTranslation('comment')

	const renderComments = useMemo(() => comments?.map(c => (
		<CommentCard
			key={c.id}
			isLoading={isLoading}
			comment={c}
			className={cls.comment}
		/>
	)), [comments, isLoading])

	if (error) {
		return <div className={classNames(cls.CommentsList, {}, [className])}>
			<Text content={t('error')} />
		</div>
	}

	return (
		<div className={classNames(cls.CommentsList, {}, [className])}>
			{comments?.length
				? renderComments
				: <Text content={t('empty-list')} />}
		</div>
	)
})