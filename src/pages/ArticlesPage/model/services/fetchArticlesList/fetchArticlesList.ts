import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities/Article'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'
import { getLimit, getPage } from '../../selectors/articlesPageSelector'

export const fetchArticlesList = createAsyncThunk<
	ArticleType[],
	void,
	ThunkApiConfigType<string>
>(
	'articlesPage/fetchArticlesList',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI

		try {
			const page = getPage(getState())
			const limit = getLimit(getState())
			const response = await extra.api.get<ArticleType[]>(
				RoutePaths.articles,
				{
					params: {
						_page: page,
						_limit: limit
					}
				})

			return response.data
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)