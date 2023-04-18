import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { CommentType } from 'entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
	CommentType[],
	number,
	ThunkApiConfigType<string>
>(
	'articleDetailsComments/fetchCommentsByArticleId',
	async (articleId, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		if (!articleId) {
			return rejectWithValue('error')
		}
		try {
			const response = await extra.api.get<CommentType[]>(
				'/comments', { params: {
					articleId,
					_expand: 'profile'
				}})

			return response.data
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)