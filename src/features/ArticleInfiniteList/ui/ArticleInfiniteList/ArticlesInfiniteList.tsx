import { getError, getIsLoading, getLimit, getView } from '../../model/selectors/articlesPageSelector'
import { articlesInfiniteListReducer, getArticles } from '../../model/slice/articlesInfiniteListSlice'
import { FC, ReactNode, memo, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { VStack } from 'shared/ui/Stack'
import { Text, TextSize, TextVariant } from 'shared/ui/Text'
import { ArticleList } from 'entities/Article'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { PageWrapper } from 'widgets/PageWrapper'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'

const reducers: ReducerList = {
	articlesInfiniteList: articlesInfiniteListReducer
}

export const ArticleInfiniteList: FC = memo(() => {
	const { t } = useTranslation('article')
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getIsLoading)
	const view = useSelector(getView)
	const limit = useSelector(getLimit)
	const error = useSelector(getError)
	const dispatch = useAppDispatch()
	const [isReducerMounted, setIsReducerMounted] = useState<boolean>(false)

	const onLoadNextPart = useCallback(() => {
		if (!error) {
			dispatch(fetchNextArticlesPage())
		}
	}, [dispatch, error])

	let content: ReactNode = useMemo(() => <ArticleList
		articles={articles}
		view={view}
		isLoading={isLoading}
		limit={limit}
	/>, [articles, view, isLoading, limit])

	if (error) {
		content = <Text
			variant={TextVariant.ERROR}
			size={TextSize.L}
			content={t('error.server-error')}
		/>
	}

	if (!isLoading && !articles.length && !error) {
		content = <Text
			size={TextSize.L}
			content={t('empty-articles-list')}
		/>
	}

	return <LazyReducerLoader
		reducers={reducers}
		removeAfterUnmount={false}
		setIsReducerMounted={setIsReducerMounted}
	>
		<PageWrapper
			onScrollEnd={onLoadNextPart}
			watchedScroll={true}
		>
			<VStack
				gap='16'
			>
				<ArticlesPageFilters isReducerMounted={isReducerMounted} />
				{content}
			</VStack>
		</PageWrapper>
	</LazyReducerLoader>
})