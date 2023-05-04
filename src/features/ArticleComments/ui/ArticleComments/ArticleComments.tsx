
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CommentsList } from '@/entities/Comment'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect'
import classNames from '@/shared/lib/classNames/classNames'
import { LazyReducerLoader, ReducerList } from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import {
	getArticleDetailsCommentsError,
	getArticleDetailsCommentsIsLoading
} from '../../model/selectors/comments'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {
	articleDetailsCommentsReducer,
	getArticleDetailsComments
} from '../../model/slice/articleDetailsCommentsSlice'
import { AddArticleComment } from '../AddArticleComment/AddArticleComment'

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