import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities/Article'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'

export const fetchArticlesList = createAsyncThunk<
	ArticleType[],
	void,
	ThunkApiConfigType<string>
>(
	'articlesPage/fetchArticlesList',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const response = await extra.api.get<ArticleType[]>(RoutePaths.articles)

			return response.data
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)