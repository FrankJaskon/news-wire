import { getFilter, getOrder, getSearch, getSort, getView } from '../../model/selectors/articlesPageSelector'
import { FC, memo, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticlesPageFilters.module.scss'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { ViewVariantType } from 'entities/Article'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import { ViewToggler } from 'features/ViewToggler'
import { useTranslation } from 'react-i18next'
import { AppInput } from 'shared/ui/Form/AppInput'
import { ArticlesSortSelector, ArticlesSortVariantType } from 'features/ArticlesSortSelector'
import { SortOrderType } from 'shared/types/types'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce'
import { useSearchParams } from 'react-router-dom'
import { setQueryParams } from 'shared/lib/setQueryParams/setQueryParams'
import { QueryParamsKeys } from 'shared/const/queryParams'
import { ArticlesTypesType, ArticleTypeTabs } from 'features/ArticleTypeTabs'

export interface ArticlesPageFiltersProps {
	className?: string
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo((props: ArticlesPageFiltersProps) => {
	const {
		className
	} = props
	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()
	const [_, setSearchParams] = useSearchParams()
	const view = useSelector(getView)
	const sort = useSelector(getSort)
	const order = useSelector(getOrder)
	const search = useSelector(getSearch)
	const filter = useSelector(getFilter)

	const setFirstPage = useCallback(() => {
		dispatch(articlesPageActions.setPage(1))
	}, [dispatch])

	const fetchArticles = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }))
	}, [dispatch])

	const changeView = useCallback((value: ViewVariantType) => {
		if (view !== value) {
			dispatch(articlesPageActions.setView(value))
			setFirstPage
		}
	}, [dispatch, view, setFirstPage])

	const debouncedFetchArticles = useDebounce(fetchArticles, 500)

	const changeSort = useCallback((value: ArticlesSortVariantType) => {
		dispatch(articlesPageActions.setSort(value))
		setQueryParams(setSearchParams, QueryParamsKeys.SORT, value)
		setFirstPage()
		fetchArticles()
	}, [dispatch, setFirstPage, fetchArticles, setSearchParams])

	const changeOrder = useCallback((value: SortOrderType) => {
		dispatch(articlesPageActions.setOrder(value))
		setQueryParams(setSearchParams, QueryParamsKeys.ORDER, value)
		setFirstPage()
		fetchArticles()
	}, [dispatch, setFirstPage, fetchArticles, setSearchParams])

	const changeSearch = useCallback((value: string) => {
		dispatch(articlesPageActions.setSearch(value))
		setQueryParams(setSearchParams, QueryParamsKeys.SEARCH, value)
		setFirstPage()
		debouncedFetchArticles()
	}, [dispatch, setFirstPage, debouncedFetchArticles, setSearchParams])

	const changeFilter = useCallback((value: string) => {
		dispatch(articlesPageActions.setFilter(value as ArticlesTypesType))
		setQueryParams(setSearchParams, QueryParamsKeys.TYPE, value)
		setFirstPage()
		fetchArticles()
	}, [dispatch, setFirstPage, fetchArticles, setSearchParams])

	return <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
		<div className={cls.sortWrapper}>
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
		</div>
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
	</div>
})