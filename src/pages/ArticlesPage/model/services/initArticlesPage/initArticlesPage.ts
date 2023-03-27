import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { geInitialized, getHasMore, getIsLoading, getPage } from '../../selectors/articlesPageSelector'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkApiConfigType<string>
>(
	'articlesPage/initArticlesPage',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI

		try {
			const isInitialized = geInitialized(getState())
			if (!isInitialized) {
				thunkAPI.dispatch(articlesPageActions.setInitializedValues())
				thunkAPI.dispatch(fetchArticlesList())
			}
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)