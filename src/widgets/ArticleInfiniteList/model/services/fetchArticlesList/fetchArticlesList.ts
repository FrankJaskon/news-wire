import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { ArticleType } from '@/entities/Article'
import { ArticlesTypes } from '@/entities/ArticleTypeTabs'
import { getArticlesRoute } from '@/shared/const/RoutPaths'
import {
	getArticleInfiniteListFilter,
	getArticleInfiniteListLimit,
	getArticleInfiniteListOrder,
	getArticleInfiniteListPage,
	getArticleInfiniteListSearch,
	getArticleInfiniteListSort,
} from '../../selectors/articleInfiniteListSelector'

export interface FetchArticlesListProps {
	replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
	ArticleType[],
	FetchArticlesListProps,
	ThunkApiConfigType<string>
>('articlesInfiniteList/fetchArticlesList', async (_, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI

	try {
		const filter = getArticleInfiniteListFilter(getState())
		const limit = getArticleInfiniteListLimit(getState())
		const order = getArticleInfiniteListOrder(getState())
		const page = getArticleInfiniteListPage(getState())
		const search = getArticleInfiniteListSearch(getState())
		const sort = getArticleInfiniteListSort(getState())
		const response = await extra.api.get<ArticleType[]>(getArticlesRoute(), {
			params: {
				_page: page,
				_limit: limit,
				_sort: sort,
				_order: order,
				q: search,
				type: filter === ArticlesTypes.ALL ? undefined : filter,
				_expand: 'profile',
			},
		})

		if (!response) {
			return rejectWithValue('error')
		}
		return response.data
	} catch (error: any) {
		return rejectWithValue('error')
	}
})
