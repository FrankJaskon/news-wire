import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CommentsList } from '@/entities/Comment'
import { QueryParamsKeys } from '@/shared/const/queryParams'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect'
import { useMoveToElementByQuery } from '@/shared/hooks/useMoveToElementByQuery'
import classNames from '@/shared/lib/classNames/classNames'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text } from '@/shared/ui/deprecated/Text'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import {
	useArticleDetailsCommentsError,
	useArticleDetailsCommentsIsLoading,
} from '../../model/selectors/comments'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
	articleDetailsCommentsReducer,
	getArticleDetailsComments,
} from '../../model/slice/articleDetailsCommentsSlice'
import { AddArticleComment } from '../AddArticleComment/AddArticleComment'

export interface ArticleCommentsProps {
	className?: string
	'data-testid'?: string
}

const reducers: ReducerList = {
	articleDetailsComments: articleDetailsCommentsReducer,
}

export const ArticleComments: FC<ArticleCommentsProps> = props => {
	const { className, 'data-testid': dataTestId = 'article-details-comments' } = props

	const { t } = useTranslation(['translation', 'article'])
	const dispatch = useAppDispatch()
	const { id } = useParams()

	const comments = useSelector(getArticleDetailsComments.selectAll)
	const isLoading = useArticleDetailsCommentsIsLoading()
	const error = useArticleDetailsCommentsError()

	const highlightedItemId = useMoveToElementByQuery(QueryParamsKeys.COMMENT, isLoading)

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(Number(id)))
	})

	if (!id) {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<AppText text={t('article.error.server-error')} variant='error' />}
				off={<Text title={t('article.error.server-error')} />}
			/>
		)
	}

	return (
		<LazyReducerLoader reducers={reducers}>
			<VStack gap='16' className={classNames('', {}, [className])} data-testid={dataTestId}>
				<ToggleFeatures
					feature='isAppRedesigned'
					on={
						<AppText
							title={t('comment-title', {
								ns: 'article',
							})}
							size='xl'
							weight='bolder'
						/>
					}
					off={
						<Text
							title={t('comment-title', {
								ns: 'article',
							})}
						/>
					}
				/>
				<AddArticleComment articleId={Number(id)} />
				<CommentsList
					comments={comments}
					isLoading={isLoading}
					error={error}
					data-testid={`${dataTestId}-list`}
					highlightedItemId={highlightedItemId ?? undefined}
				/>
			</VStack>
		</LazyReducerLoader>
	)
}
