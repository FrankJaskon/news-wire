import { ArticleList } from 'entities/Article'
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import { FC, memo, ReactNode, useCallback, useMemo } from 'react'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
	getError,
	getIsLoading,
	getLimit,
	getView
} from '../../model/selectors/articlesPageSelector'
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { Text, TextSize, TextVariant } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage'
import { PageWrapper } from 'widgets/PageWrapper'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { useSearchParams } from 'react-router-dom'
import { VStack } from 'shared/ui/Stack'

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

	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getIsLoading)
	const view = useSelector(getView)
	const limit = useSelector(getLimit)
	const error = useSelector(getError)

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams))
	})

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
		content = <VStack
			justify='center'
			align='center'
		>
			<Text
				variant={TextVariant.ERROR}
				size={TextSize.L}
				content={t('error.server-error')}
			/>
		</VStack>
	}

	if (!isLoading && !articles.length && !error) {
		content = <VStack
			justify='center'
			align='start'
		>
			<Text
				size={TextSize.L}
				content={t('empty-articles-list')}
			/>
		</VStack>
	}

	return <LazyReducerLoader
		reducers={reducers}
		removeAfterUnmount={false}
	>
		<PageWrapper
			onScrollEnd={onLoadNextPart}
			watchedScroll={true}
		>
			<VStack
				gap='gap16'
			>
				<ArticlesPageFilters />
				{content}
			</VStack>
		</PageWrapper>
	</LazyReducerLoader>
}

export default memo(ArticlesPage)