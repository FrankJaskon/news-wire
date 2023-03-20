import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { routePaths } from 'shared/config/routePaths/routPaths'
import {
	ValidateArticleDetailsError,
	ValidateArticleDetailsErrorType
} from '../../types/ArticleDetailsScheme'
import type {
	CommentType
} from 'entities/Comment/model/types/comment'

export const fetchArticleComments = createAsyncThunk<
	CommentType,
	number,
	ThunkApiConfigType<ValidateArticleDetailsErrorType>
> (
	'articleDetails/fetchArticleComments',
	async (id, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI
		try {
			const response = await extra.api.get<CommentType>(routePaths.articles_details + id)

			return response.data
		} catch (error: any) {
			return rejectWithValue(ValidateArticleDetailsError.SERVER_ERROR)
		}
	}
)