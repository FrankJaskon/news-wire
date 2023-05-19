import { FC, memo, useCallback } from 'react'
import { AddNewComment } from '@/entities/AddNewComment'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { createNewCommentForArticle } from '../../model/services/createNewCommentForArticle/createNewCommentForArticle'

export interface AddArticleCommentProps {
	articleId: number
	'data-testid'?: string
}

export const AddArticleComment: FC<AddArticleCommentProps> = memo(
	(props: AddArticleCommentProps) => {
		const { articleId, 'data-testid': dataTestId = 'article-details-add-new-comment' } = props

		const dispatch = useAppDispatch()

		const onCreateNewComment = useCallback(
			(value: string) => {
				dispatch(createNewCommentForArticle({ comment: value, articleId }))
			},
			[articleId, dispatch]
		)

		return <AddNewComment handleSubmit={onCreateNewComment} data-testid={dataTestId} />
	}
)
