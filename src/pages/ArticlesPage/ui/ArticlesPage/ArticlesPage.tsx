import { ArticleList, ViewVariant, ViewVariantType } from 'entities/Article'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import { FC, memo, useCallback } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import cls from './ArticlesPage.module.scss'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
	getError,
	getHasMore,
	getIsLoading,
	getLimit,
	getPage,
	getView
} from '../../model/selectors/articlesPageSelector'
import { ViewToggler } from 'features/ViewToggler'
import { VIEW_ARTICLES_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { PageWrapper } from 'widgets/PageWrapper'
import { setInitializedValues } from '../../model/services/setInitializedValues/setInitializedValues'

export interface ArticlesPageProps {
	className?: string
}

const reducers: ReducerList = {
	articlesPage: articlesPageReducer
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
	const {
		className
	} = props

	const dispatch = useAppDispatch()
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getIsLoading)
	const view = useSelector(getView)
	const page = useSelector(getPage)
	const limit = useSelector(getLimit)
	const hasMore = useSelector(getHasMore)
	const error = useSelector(getError)

	useInitialEffect(() => {
		dispatch(setInitializedValues())
	})

	const onLoadNextPart = useCallback(() => {
		if (hasMore && !isLoading) {
			dispatch(articlesPageActions.setPage(page + 1))
			dispatch(fetchArticlesList())
		}
	}, [dispatch, page, hasMore, isLoading])

	const changeView = useCallback((value: ViewVariantType) => {
		if (view !== value) {
			dispatch(articlesPageActions.setView(value))
		}
	}, [dispatch, view])

	return <LazyReducerLoader reducers={reducers}>
		<PageWrapper
			className={classNames(cls.ArticlesPage, {}, [className])}
			onScrollEnd={onLoadNextPart}
		>
			<div className={cls.header}>
				<div>+</div>
				<ViewToggler
					activeView={view}
					onToggle={changeView}
				/>
			</div>
			<ArticleList
				articles={articles}
				view={view}
				isLoading={isLoading}
				limit={limit}
			/>
		</PageWrapper>
	</LazyReducerLoader>
}

export default memo(ArticlesPage)