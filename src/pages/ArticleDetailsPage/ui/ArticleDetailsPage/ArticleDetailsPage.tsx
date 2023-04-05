import { ArticleDetails, ArticleList } from 'entities/Article'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { Text } from 'shared/ui/Text'
import { CommentsList } from 'entities/Comment'
import { useParams } from 'react-router-dom'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { articleDetailsCommentsReducer, getArticleDetailsComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import { getIsLoading, getError } from '../../model/selectors/comments'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddNewComment } from 'features/AddNewComment'
import { createNewCommentForArticle } from '../../model/services/createNewCommentForArticle/createNewCommentForArticle'
import { PageWrapper } from 'widgets/PageWrapper'
import {
	getArticleRecommendations
} from '../../model/slice/articleDetailsPageRecommendationsSlice'
import {
	getArticlePageRecommendationsError,
	getArticlePageRecommendationsIsLoading
} from '../../model/selectors/recommendations'
import {
	fetchArticlesRecommendations
} from '../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations'
import { articleDetailsPageReducer } from '../../model/slice'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { VStack } from 'shared/ui/Stack'

export interface ArticleDetailsPageProps {
	className ?: string
}

const reducers: ReducerList = {
	articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const {
		className
	} = props

	const { t } = useTranslation('article')
	const id = Number(useParams().id)
	const comments = useSelector(getArticleDetailsComments.selectAll)
	const recommendations = useSelector(getArticleRecommendations.selectAll)
	const isRecommendationsLoading = useSelector(getArticlePageRecommendationsIsLoading)
	const isRecommendationsError = useSelector(getArticlePageRecommendationsError)
	const isLoading = useSelector(getIsLoading)
	const commentError = useSelector(getError)
	const dispatch = useAppDispatch()

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(Number(id)))
		dispatch(fetchArticlesRecommendations())
	})

	if (!id && __PROJECT__ !== 'storybook') {
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			<Text variant='error' content={t('details.error.article-not-found')} />
		</div>
	}

	const onCreateNewComment = useCallback((value: string) => {
		dispatch(createNewCommentForArticle(value))
	}, [dispatch])

	return <LazyReducerLoader
		reducers={reducers}
	>
		<PageWrapper className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			<VStack
				gap='gap24'
			>
				<ArticleDetailsPageHeader
					articleId={id}
				/>
				<ArticleDetails id={id} />
				<VStack
					gap='gap8'
				>
					<Text title={t('recommendations-title')} />
					<ArticleList
						className={cls.recommendations}
						articles={recommendations}
						isLoading={isRecommendationsLoading}
						error={isRecommendationsError}
						target='_blank'
					/>
				</VStack>
				<VStack
					gap='gap16'
				>
					<Text title={t('comment-title')} />
					<AddNewComment handleSubmit={onCreateNewComment} />
					<CommentsList
						comments={comments}
						isLoading={isLoading}
						error={commentError}
					/>
				</VStack>
			</VStack>
		</PageWrapper>
	</LazyReducerLoader>
}

export default memo(ArticleDetailsPage)