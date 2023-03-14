import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { routePaths } from 'shared/config/routePaths/routPaths'
import {
	ArticleType,
	ValidateArticleDetailsError,
	ValidateArticleDetailsErrorType
} from '../types/ArticleDetailsScheme'

export const fetchArticleById = createAsyncThunk<
	ArticleType,
	number,
	ThunkApiConfigType<ValidateArticleDetailsErrorType>
> (
	'articleDetails/fetchArticleById',
	async (id, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI
		try {
			const response = await extra.api.get<ArticleType>(routePaths.articles_details + id)

			return response.data
		} catch (error: any) {
			return rejectWithValue(ValidateArticleDetailsError.SERVER_ERROR)
		}
	}
)