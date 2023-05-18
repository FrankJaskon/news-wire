import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import {
	getArticleInfiniteListHasMore,
	getArticleInfiniteListIsLoading,
	getArticleInfiniteListPage,
} from '../../selectors/articleInfiniteListSelector'
import { articlesInfiniteListActions } from '../../slice/articlesInfiniteListSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkApiConfigType<string>>(
	'articlesInfiniteList/fetchNextArticlesPage',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI

		try {
			const hasMore = getArticleInfiniteListHasMore(getState())
			const isLoading = getArticleInfiniteListIsLoading(getState())
			const page = getArticleInfiniteListPage(getState())

			if (hasMore && !isLoading) {
				thunkAPI.dispatch(articlesInfiniteListActions.setPage(page + 1))
				const response = await thunkAPI.dispatch(fetchArticlesList({}))
				if (response.meta.requestStatus === 'rejected') {
					return rejectWithValue('error')
				}
			}
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)
