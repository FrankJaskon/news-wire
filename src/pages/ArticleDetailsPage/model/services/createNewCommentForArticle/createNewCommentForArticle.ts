import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { getArticleDetailsData } from 'entities/Article'
import { CommentType } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const createNewCommentForArticle = createAsyncThunk<CommentType, string, ThunkApiConfigType<string>>(
	'articleDetails/createNewCommentForArticle',
	async (comment, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI
		try {
			const userData = getUserAuthData(getState())
			const articleDetails = getArticleDetailsData(getState())

			if (!userData || !comment || !articleDetails) {
				return rejectWithValue('no data')
			}

			const response = await extra.api.post<CommentType>(
				'/comments',
				{
					userId: userData.id,
					articleId: articleDetails.id,
					text: comment
				})

			thunkAPI.dispatch(fetchCommentsByArticleId(articleDetails.id))

			return response.data
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)