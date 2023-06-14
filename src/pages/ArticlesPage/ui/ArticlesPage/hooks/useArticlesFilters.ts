import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ViewVariant, ViewVariantType } from '@/entities/Article'
import { ArticlesTypesType } from '@/entities/ArticleTypeTabs'
import { SortVariantType } from '@/entities/SortSelector'
import { QueryParamsKeys } from '@/shared/const/queryParams'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect'
import { setQueryParams } from '@/shared/lib/setQueryParams/setQueryParams'
import { SortOrderType } from '@/shared/types/types'
import {
	useArticleInfiniteListFilter,
	useArticleInfiniteListOrder,
	useArticleInfiniteListSearch,
	useArticleInfiniteListSort,
	useArticleInfiniteListView,
} from '../model/selectors/articleInfiniteListSelector'
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList'
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage'
import { articlesInfiniteListActions } from '../model/slice/articlesInfiniteListSlice'

export const useArticlesFilters = () => {
	const dispatch = useAppDispatch()
	const [_, setSearchParams] = useSearchParams()
	const filter = useArticleInfiniteListFilter()
	const order = useArticleInfiniteListOrder()
	const search = useArticleInfiniteListSearch()
	const sort = useArticleInfiniteListSort()
	const view = useArticleInfiniteListView()

	const setFirstPage = useCallback(() => {
		dispatch(articlesInfiniteListActions.setPage(1))
	}, [dispatch])

	const changeView = useCallback(
		(value: string) => {
			if (view !== value) {
				dispatch(articlesInfiniteListActions.setView(value as ViewVariantType))
				setFirstPage()
			}
		},
		[dispatch, view, setFirstPage]
	)

	const fetchArticles = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }))
	}, [dispatch])

	const debouncedFetchArticles = useDebounce(fetchArticles, 500)

	const changeSort = useCallback(
		(value: SortVariantType) => {
			dispatch(articlesInfiniteListActions.setSort(value))
			setQueryParams(setSearchParams, QueryParamsKeys.SORT, value)
			setFirstPage()
			fetchArticles()
		},
		[dispatch, setFirstPage, fetchArticles, setSearchParams]
	)

	const changeOrder = useCallback(
		(value: SortOrderType) => {
			dispatch(articlesInfiniteListActions.setOrder(value))
			setQueryParams(setSearchParams, QueryParamsKeys.ORDER, value)
			setFirstPage()
			fetchArticles()
		},
		[dispatch, setFirstPage, fetchArticles, setSearchParams]
	)

	const changeSearch = useCallback(
		(value: string) => {
			dispatch(articlesInfiniteListActions.setSearch(value))
			setQueryParams(setSearchParams, QueryParamsKeys.SEARCH, value)
			setFirstPage()
			debouncedFetchArticles()
		},
		[dispatch, setFirstPage, debouncedFetchArticles, setSearchParams]
	)

	const changeFilter = useCallback(
		(value: string) => {
			dispatch(articlesInfiniteListActions.setFilter(value as ArticlesTypesType))
			setQueryParams(setSearchParams, QueryParamsKeys.TYPE, value)
			setFirstPage()
			fetchArticles()
		},
		[dispatch, setFirstPage, fetchArticles, setSearchParams]
	)

	return {
		filter,
		order,
		search,
		sort,
		view,
		setFirstPage,
		fetchArticles,
		changeSort,
		changeOrder,
		changeSearch,
		changeFilter,
		changeView,
	}
}

export const useInitSearchParams = () => {
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams))
	}, [dispatch])
}

export const useUpdateLimitOnChangeView = () => {
	const dispatch = useAppDispatch()
	const view = useArticleInfiniteListView()

	useEffect(() => {
		const limit = view === ViewVariant.GRID ? 9 : 3
		dispatch(articlesInfiniteListActions.setLimit(limit))
	}, [view, dispatch])
}
