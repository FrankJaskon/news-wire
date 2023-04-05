import { CommentType } from '../../model/types/comment'
import { FC, memo, useMemo } from 'react'
import { Text } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { VStack } from 'shared/ui/Stack'

export interface CommentsListProps {
	comments?: CommentType[]
	isLoading?: boolean
	error?: string
}

export const CommentsList: FC<CommentsListProps> = memo((props: CommentsListProps) => {
	const {
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
		/>
	)), [comments, isLoading])

	if (error) {
		return <VStack
			justify='center'
			align='center'
		>
			<Text content={t('error')} />
		</VStack>
	}

	if (isLoading) {
		return <VStack
			gap='gap16'
		>
			<CommentCard isLoading />
			<CommentCard isLoading />
			<CommentCard isLoading />
		</VStack>
	}

	return (
		<VStack
			gap='gap16'
		>
			{comments?.length
				? renderComments
				: <Text content={t('empty-list')} />}
		</VStack>
	)
})