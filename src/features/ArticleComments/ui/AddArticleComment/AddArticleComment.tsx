import { FC, memo, useCallback } from 'react'
import { AddNewComment } from '@/entities/AddNewComment'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { createNewCommentForArticle } from '../../model/services/createNewCommentForArticle/createNewCommentForArticle'

export interface AddArticleCommentProps {
	'data-testid'?: string
}

export const AddArticleComment: FC = memo((props: AddArticleCommentProps) => {
	const {
		'data-testid': dataTestId = 'article-details-add-new-comment'
	} = props

	const dispatch = useAppDispatch()

	const onCreateNewComment = useCallback((value: string) => {
		dispatch(createNewCommentForArticle(value))
	}, [dispatch])

	return <AddNewComment
		handleSubmit={onCreateNewComment}
		data-testid={dataTestId}
	/>
})