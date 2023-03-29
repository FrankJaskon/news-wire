import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { getHasMore, getIsLoading, getPage } from '../../selectors/articlesPageSelector'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkApiConfigType<string>
>(
	'articlesPage/fetchNextArticlesPage',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI

		try {
			const hasMore = getHasMore(getState())
			const page = getPage(getState())
			const isLoading = getIsLoading(getState())

			if (hasMore && !isLoading) {
				thunkAPI.dispatch(articlesPageActions.setPage(page + 1))
				thunkAPI.dispatch(fetchArticlesList({}))
			}
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)