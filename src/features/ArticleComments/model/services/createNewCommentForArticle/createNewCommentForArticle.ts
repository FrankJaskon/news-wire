import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { CommentType } from '@/entities/Comment'
import { getUserAuthData } from '@/entities/User'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

interface NewCommentForArticleProps {
	articleId: number
	comment: string
}

export const createNewCommentForArticle = createAsyncThunk<
	CommentType,
	NewCommentForArticleProps,
	ThunkApiConfigType<string>
>('articleDetailsComments/createNewCommentForArticle', async (props, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI
	const { comment, articleId } = props
	try {
		const userData = getUserAuthData(getState())

		if (!userData || !comment || !articleId) {
			throw rejectWithValue('Error. No data')
		}

		const response = await extra.api.post<CommentType>('/comments', {
			profileId: userData.id,
			articleId: articleId,
			text: comment,
		})

		setTimeout(() => {
			thunkAPI.dispatch(fetchCommentsByArticleId(articleId))
		}, 1000)

		return response.data
	} catch (error: any) {
		return rejectWithValue('error')
	}
})
