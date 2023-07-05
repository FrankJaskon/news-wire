import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/deprecated/Text'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { CommentType } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { CommentVariant } from '../CommentCard/redesigned/CommentCard'

export interface CommentsListProps {
	comments?: CommentType[]
	isLoading?: boolean
	error?: string
	'data-testid'?: string
	variant?: CommentVariant
	highlightedItemId?: string
}

export const CommentsList: FC<CommentsListProps> = memo((props: CommentsListProps) => {
	const {
		comments,
		isLoading,
		error,
		'data-testid': dataTestId = 'comments-list',
		variant = 'user',
		highlightedItemId,
	} = props

	const { t } = useTranslation()

	if (error) {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<AppText variant='error' text={t('error')} />}
				off={<Text content={t('error')} />}
			/>
		)
	}

	if (isLoading) {
		return (
			<VStack gap='16'>
				<CommentCard isLoading variant={variant} />
				<CommentCard isLoading variant={variant} />
				<CommentCard isLoading variant={variant} />
			</VStack>
		)
	}

	return (
		<VStack gap='16' data-testid={dataTestId}>
			{comments?.length ? (
				comments?.map(comment => (
					<CommentCard
						key={comment.id}
						isLoading={isLoading}
						comment={comment}
						data-testid={`${dataTestId}-item`}
						variant={variant}
						highlighted={
							(highlightedItemId && Number(highlightedItemId)) === comment.id
						}
					/>
				))
			) : (
				<ToggleFeatures
					feature='isAppRedesigned'
					on={<AppText text={t('empty-comments-list')} />}
					off={<Text content={t('empty-comments-list')} />}
				/>
			)}
		</VStack>
	)
})
