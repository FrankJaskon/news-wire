import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ViewVariantType } from '@/entities/Article'
import { ArticlesSortSelector, ArticlesSortVariantType } from '@/features/ArticlesSortSelector'
import { ViewToggler } from '@/features/ViewToggler'
import { QueryParamsKeys } from '@/shared/const/queryParams'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect'
import classNames from '@/shared/lib/classNames/classNames'
import { setQueryParams } from '@/shared/lib/setQueryParams/setQueryParams'
import { SortOrderType } from '@/shared/types/types'
import { AppInput } from '@/shared/ui/Form/AppInput'
import { HStack, VStack } from '@/shared/ui/Stack'
import { getFilter, getOrder, getSearch, getSort, getView } from '../../model/selectors/articlesPageSelector'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { articlesInfiniteListActions } from '../../model/slice/articlesInfiniteListSlice'
import { ArticleTypeTabs, ArticlesTypesType } from '../ArticleTypeTabs'
import cls from './ArticlesPageFilters.module.scss'

export interface ArticlesPageFiltersProps {
	className?: string
	isReducerMounted?: boolean
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo((props: ArticlesPageFiltersProps) => {
	const {
		className,
		isReducerMounted
	} = props
	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()
	const [searchParams, setSearchParams] = useSearchParams()
	const view = useSelector(getView)
	const sort = useSelector(getSort)
	const order = useSelector(getOrder)
	const search = useSelector(getSearch)
	const filter = useSelector(getFilter)

	useInitialEffect(() => {
		if (isReducerMounted) {
			dispatch(initArticlesPage(searchParams))
		}
	}, [isReducerMounted])

	const setFirstPage = useCallback(() => {
		dispatch(articlesInfiniteListActions.setPage(1))
	}, [dispatch])

	const fetchArticles = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }))
	}, [dispatch])

	const changeView = useCallback((value: ViewVariantType) => {
		if (view !== value) {
			dispatch(articlesInfiniteListActions.setView(value))
			setFirstPage
		}
	}, [dispatch, view, setFirstPage])

	const debouncedFetchArticles = useDebounce(fetchArticles, 500)

	const changeSort = useCallback((value: ArticlesSortVariantType) => {
		dispatch(articlesInfiniteListActions.setSort(value))
		setQueryParams(setSearchParams, QueryParamsKeys.SORT, value)
		setFirstPage()
		fetchArticles()
	}, [dispatch, setFirstPage, fetchArticles, setSearchParams])

	const changeOrder = useCallback((value: SortOrderType) => {
		dispatch(articlesInfiniteListActions.setOrder(value))
		setQueryParams(setSearchParams, QueryParamsKeys.ORDER, value)
		setFirstPage()
		fetchArticles()
	}, [dispatch, setFirstPage, fetchArticles, setSearchParams])

	const changeSearch = useCallback((value: string) => {
		dispatch(articlesInfiniteListActions.setSearch(value))
		setQueryParams(setSearchParams, QueryParamsKeys.SEARCH, value)
		setFirstPage()
		debouncedFetchArticles()
	}, [dispatch, setFirstPage, debouncedFetchArticles, setSearchParams])

	const changeFilter = useCallback((value: string) => {
		dispatch(articlesInfiniteListActions.setFilter(value as ArticlesTypesType))
		setQueryParams(setSearchParams, QueryParamsKeys.TYPE, value)
		setFirstPage()
		fetchArticles()
	}, [dispatch, setFirstPage, fetchArticles, setSearchParams])

	return <VStack
		className={classNames('', {}, [className])}
		gap='8'
	>
		<HStack
			justify='between'
		>
			<ArticlesSortSelector
				order={order}
				sort={sort}
				onChangeOrder={changeOrder}
				onChangeSort={changeSort}
			/>
			<ViewToggler
				activeView={view}
				onToggle={changeView}
			/>
		</HStack>
		<AppInput
			className={cls.searchInput}
			placeholder={t('search-input-placeholder')}
			value={search}
			onChange={changeSearch}
		/>
		<ArticleTypeTabs
			filter={filter}
			onTabClick={changeFilter}
		/>
	</VStack>
})