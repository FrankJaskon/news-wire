import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { ArticlesSortVariantType } from 'features/ArticlesSortSelector'
import { ArticlesTypesType } from 'features/ArticleTypeTabs'
import { QueryParamsKeys, QueryParamsKeysType } from 'shared/const/queryParams'
import { SortOrderType } from 'shared/types/types'
import { geInitialized } from '../../selectors/articlesPageSelector'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkApiConfigType<string>
>(
	'articlesPage/initArticlesPage',
	async (searchParams, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI

		const params: OptionalRecord<QueryParamsKeysType, string> = {}

		try {
			const isInitialized = geInitialized(getState())
			if (!isInitialized) {
				Object.values(QueryParamsKeys).forEach(param => {
					if (searchParams?.get?.(param) !== null) {
						params[param] = searchParams?.get?.(param) || undefined
					}
				})

				params._order && thunkAPI.dispatch(articlesPageActions.setOrder(params._order as SortOrderType))
				params._sort && thunkAPI.dispatch(articlesPageActions.setSort(params._sort as ArticlesSortVariantType))
				params._q && thunkAPI.dispatch(articlesPageActions.setSearch(params._q))
				params.type && thunkAPI.dispatch(articlesPageActions.setFilter(params.type as ArticlesTypesType))

				thunkAPI.dispatch(articlesPageActions.setInitializedValues())
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