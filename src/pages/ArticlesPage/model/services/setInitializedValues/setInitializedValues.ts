import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { ViewVariant, ViewVariantType } from 'entities/Article'
import { VIEW_ARTICLES_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const setInitializedValues = createAsyncThunk<
	void,
	void,
	ThunkApiConfigType<string>
>(
	'articlesPage/setInitializedValues',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI

		try {
			const initialView = localStorage.getItem(
				VIEW_ARTICLES_LOCAL_STORAGE_KEY) as ViewVariantType || ViewVariant.GRID
			thunkAPI.dispatch(articlesPageActions.setView(initialView))
			thunkAPI.dispatch(articlesPageActions.setLimit(initialView === ViewVariant.GRID ? 9 : 4))
			thunkAPI.dispatch(fetchArticlesList())
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)