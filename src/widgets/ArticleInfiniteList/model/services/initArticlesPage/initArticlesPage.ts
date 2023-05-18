import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { SortVariantType } from '@/entities/SortSelector'
import { QueryParamsKeys, QueryParamsKeysType } from '@/shared/const/queryParams'
import { SortOrderType } from '@/shared/types/types'
import { ArticlesTypesType } from '../../../ui/ArticleTypeTabs'
import { getArticleInfiniteListInitialized } from '../../selectors/articleInfiniteListSelector'
import { articlesInfiniteListActions } from '../../slice/articlesInfiniteListSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkApiConfigType<string>>(
	'articlesInfiniteList/initArticlesPage',
	async (searchParams, thunkAPI) => {
		const { rejectWithValue, getState } = thunkAPI

		const params: OptionalRecord<QueryParamsKeysType, string> = {}

		try {
			const isInitialized = getArticleInfiniteListInitialized(getState())
			if (!isInitialized) {
				Object.values(QueryParamsKeys).forEach(param => {
					if (searchParams?.get?.(param) !== null) {
						params[param] = searchParams?.get?.(param) || undefined
					}
				})

				params._order &&
					thunkAPI.dispatch(
						articlesInfiniteListActions.setOrder(params._order as SortOrderType)
					)
				params._sort &&
					thunkAPI.dispatch(
						articlesInfiniteListActions.setSort(params._sort as SortVariantType)
					)
				params._q && thunkAPI.dispatch(articlesInfiniteListActions.setSearch(params._q))
				params.type &&
					thunkAPI.dispatch(
						articlesInfiniteListActions.setFilter(params.type as ArticlesTypesType)
					)

				thunkAPI.dispatch(articlesInfiniteListActions.setInitializedValues())
				const response = await thunkAPI.dispatch(
					fetchArticlesList({
						replace: true,
					})
				)
				if (response.meta.requestStatus === 'rejected') {
					return rejectWithValue('error')
				}
			}
		} catch (error: any) {
			return rejectWithValue('error')
		}
	}
)
