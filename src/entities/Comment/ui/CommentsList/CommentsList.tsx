import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/deprecated/Text'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { CommentType } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

export interface CommentsListProps {
	comments?: CommentType[]
	isLoading?: boolean
	error?: string
	'data-testid'?: string
}

export const CommentsList: FC<CommentsListProps> = memo((props: CommentsListProps) => {
	const { comments, isLoading, error, 'data-testid': dataTestId = 'comments-list' } = props

	const { t } = useTranslation('comment')

	const renderComments = useMemo(
		() =>
			comments?.map(c => (
				<CommentCard
					key={c.id}
					isLoading={isLoading}
					comment={c}
					data-testid={`${dataTestId}-item`}
				/>
			)),
		[comments, isLoading, dataTestId]
	)

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
				<CommentCard isLoading />
				<CommentCard isLoading />
				<CommentCard isLoading />
			</VStack>
		)
	}

	return (
		<VStack gap='16' data-testid={dataTestId}>
			{comments?.length ? (
				renderComments
			) : (
				<ToggleFeatures
					feature='isAppRedesigned'
					on={<AppText text={t('empty-list')} />}
					off={<Text content={t('empty-list')} />}
				/>
			)}
		</VStack>
	)
})
