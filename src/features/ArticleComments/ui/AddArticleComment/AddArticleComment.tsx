import { AddNewComment } from '@/entities/AddNewComment'
import { createNewCommentForArticle } from '../../model/services/createNewCommentForArticle/createNewCommentForArticle'
import { FC, memo, useCallback } from 'react'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'

export const AddArticleComment: FC = memo(() => {

	const dispatch = useAppDispatch()

	const onCreateNewComment = useCallback((value: string) => {
		dispatch(createNewCommentForArticle(value))
	}, [dispatch])

	return <AddNewComment handleSubmit={onCreateNewComment} />
})