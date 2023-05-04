import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { getArticleDetailsRoute } from '@/shared/const/RoutPaths'
import { ValidateArticleDetailsError } from '../../consts/articleDetailsConsts'
import {
	ArticleType,
	ValidateArticleDetailsErrorType
} from '../../types/ArticleDetailsScheme'

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

			const response = await extra.api.get<ArticleType>(getArticleDetailsRoute(id), {
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