import { FC, memo, useCallback } from 'react'
import { AddNewComment } from '@/entities/AddNewComment'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { createNewCommentForArticle } from '../../model/services/createNewCommentForArticle/createNewCommentForArticle'

export const AddArticleComment: FC = memo(() => {

	const dispatch = useAppDispatch()

	const onCreateNewComment = useCallback((value: string) => {
		dispatch(createNewCommentForArticle(value))
	}, [dispatch])

	return <AddNewComment handleSubmit={onCreateNewComment} />
})