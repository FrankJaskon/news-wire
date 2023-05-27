import { FC, memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ArticleList, ViewVariant } from '@/entities/Article'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { AppText } from '@/shared/ui/redesigned/AppText'
// import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { PageWrapper } from '@/widgets/PageWrapper'
import {
	useArticleInfiniteListError,
	useArticleInfiniteListIsLoading,
	useArticleInfiniteListLimit,
	useArticleInfiniteListView,
} from '../model/selectors/articleInfiniteListSelector'
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import {
	articlesInfiniteListActions,
	articlesInfiniteListReducer,
	getArticles,
} from '../model/slice/articlesInfiniteListSlice'
import { ArticlesFiltersContainer } from './ArticlesFiltersContainer/ArticlesFiltersContainer'
import { ArticleViewTogglerContainer } from './ArticleViewTogglerContainer/ArticleViewTogglerContainer'

const reducers: ReducerList = {
	articlesInfiniteList: articlesInfiniteListReducer,
}

export const ArticlesPage: FC = memo(() => {
	const { t } = useTranslation('article')
	const error = useArticleInfiniteListError()
	const isLoading = useArticleInfiniteListIsLoading()
	const limit = useArticleInfiniteListLimit()
	const view = useArticleInfiniteListView()
	const articles = useSelector(getArticles.selectAll)

	const dispatch = useAppDispatch()

	useEffect(() => {
		const limit = view === ViewVariant.GRID ? 9 : 3
		dispatch(articlesInfiniteListActions.setLimit(limit))
	}, [view, dispatch])

	const onLoadNextPart = useCallback(() => {
		if (!error) {
			dispatch(fetchNextArticlesPage())
		}
	}, [dispatch, error])

	if (error) {
		return <AppText text={t('error.server-error')} />
	}

	if (!isLoading && !articles.length && !error) {
		return <AppText text={t('empty-articles-list')} />
	}

	return (
		<LazyReducerLoader reducers={reducers}>
			<PageWrapper
				onScrollEnd={onLoadNextPart}
				watchedScroll={true}
				data-testid='articles-page'
			>
				<StickyContentLayout
					content={
						<>
							<ArticleList
								articles={articles}
								view={view}
								isLoading={isLoading}
								limit={limit}
							/>
						</>
					}
					left={<ArticleViewTogglerContainer />}
					right={<ArticlesFiltersContainer />}
				/>
			</PageWrapper>
		</LazyReducerLoader>
	)
})
