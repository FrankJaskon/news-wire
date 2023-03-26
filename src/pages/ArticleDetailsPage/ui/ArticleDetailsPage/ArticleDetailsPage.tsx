import { ArticleDetails } from 'entities/Article'
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
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'
import { PageWrapper } from 'widgets/PageWrapper'

export interface ArticleDetailsPageProps {
	className ?: string
}

const reducers: ReducerList = {
	articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const {
		className
	} = props

	const { t } = useTranslation('article')
	const id = Number(useParams().id)
	const comments = useSelector(getArticleDetailsComments.selectAll)
	const isLoading = useSelector(getIsLoading)
	const error = useSelector(getError)
	const dispatch = useAppDispatch()

	useInitialEffect(() => dispatch(fetchCommentsByArticleId(Number(id))))

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
			<AppLink
				variant={AppLinkVariant.PRIMARY}
				className={cls.backBtn}
				to={RoutePaths.articles}
			>
				{'< ' + t('back-to-list-btn')}
			</AppLink>
			<ArticleDetails id={id} />
			<Text title={t('comment-title')} />
			<AddNewComment handleSubmit={onCreateNewComment} />
			<CommentsList
				comments={comments}
				isLoading={isLoading}
				error={error}
			/>
		</PageWrapper>
	</LazyReducerLoader>
}

export default memo(ArticleDetailsPage)