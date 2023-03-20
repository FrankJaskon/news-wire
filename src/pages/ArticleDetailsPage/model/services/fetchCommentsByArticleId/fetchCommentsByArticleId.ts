import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { CommentType } from 'entities/Comment'
import { routePaths } from 'shared/config/routePaths/routPaths'

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
				routePaths.articles_details_comments, { params: {
					articleId,
					_expand: 'user'
				}})

			return response.data
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)