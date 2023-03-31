import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities/Article'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'

export const fetchArticlesRecommendations = createAsyncThunk<
	ArticleType[],
	void,
	ThunkApiConfigType<string>
>(
	'articleDetailsPageRecommendations/fetchArticlesRecommendations',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.api.get<ArticleType[]>(RoutePaths.articles, {
				params: {
					_limit: 4
				}
			})
			return response.data
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)