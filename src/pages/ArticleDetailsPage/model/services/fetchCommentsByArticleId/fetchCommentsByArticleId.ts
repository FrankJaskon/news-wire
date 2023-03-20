import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { CommentType } from 'entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
	CommentType[],
	number | undefined,
	ThunkApiConfigType<string>
>(
	'articleDetailsComments/fetchCommentsByArticleId',
	async (articleId, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		if (!articleId) {
			rejectWithValue('error')
		}
		try {
			const response = await extra.api.get<CommentType[]>(
				'/comments', { params: {
					articleId,
					_expand: 'user'
				}})

			return response.data
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)