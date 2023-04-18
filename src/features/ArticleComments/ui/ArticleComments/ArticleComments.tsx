import { CommentsList } from 'entities/Comment'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { VStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text'
import { AddArticleComment } from '../AddArticleComment/AddArticleComment'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
	articleDetailsCommentsReducer,
	getArticleDetailsComments
} from '../../model/slice/articleDetailsCommentsSlice'
import { useSelector } from 'react-redux'
import {
	getArticleDetailsCommentsError,
	getArticleDetailsCommentsIsLoading
} from '../../model/selectors/comments'
import { useParams } from 'react-router-dom'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'

export interface ArticleCommentsProps {
	className?: string
}

const reducers: ReducerList = {
	articleDetailsComments: articleDetailsCommentsReducer
}

export const ArticleComments: FC<ArticleCommentsProps> = (props) => {
	const { className } = props

	const { t } = useTranslation(['translation', 'article'])
	const dispatch = useAppDispatch()
	const { id } = useParams()

	const comments = useSelector(getArticleDetailsComments.selectAll)
	const isLoading = useSelector(getArticleDetailsCommentsIsLoading)
	const error = useSelector(getArticleDetailsCommentsError)


	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(Number(id)))
	})

	return <LazyReducerLoader
		reducers={reducers}
	>
		<VStack
			gap='16'
			className={classNames('', {}, [className])}
		>
			<Text title={t('comment-title', {
				ns: 'article'
			})} />
			<AddArticleComment />
			<CommentsList
				comments={comments}
				isLoading={isLoading}
				error={error}
			/>
		</VStack>
	</LazyReducerLoader>
}