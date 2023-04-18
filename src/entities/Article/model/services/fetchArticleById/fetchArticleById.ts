import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'
import {
	ArticleType,
	ValidateArticleDetailsErrorType
} from '../../types/ArticleDetailsScheme'
import { ValidateArticleDetailsError } from '../../consts/articleDetailsConsts'

export const fetchArticleById = createAsyncThunk<
	ArticleType,
	number,
	ThunkApiConfigType<ValidateArticleDetailsErrorType>
> (
	'articleDetails/fetchArticleById',
	async (id, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI
		try {
			if (!id) {
				return rejectWithValue(ValidateArticleDetailsError.NO_DATA)
			}

			const response = await extra.api.get<ArticleType>(RoutePaths.articles_details + id, {
				params: {
					_expand: 'profile'
				}
			})

			return response.data
		} catch (error: any) {
			return rejectWithValue(ValidateArticleDetailsError.SERVER_ERROR)
		}
	}
)