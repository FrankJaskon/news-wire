import { ArticleList } from 'entities/Article'
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import { FC, memo, ReactNode, useCallback } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import cls from './ArticlesPage.module.scss'
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
		dispatch(fetchNextArticlesPage())
	}, [dispatch])

	let content: ReactNode = <ArticleList
		articles={articles}
		view={view}
		isLoading={isLoading}
		limit={limit}
	/>

	if (error) {
		content = <div className={cls.warningWrapper}>
			<Text
				variant={TextVariant.ERROR}
				size={TextSize.L}
				content={t('error.server-error')}
			/>
		</div>
	}

	if (!isLoading && !articles.length && !error) {
		content = <div className={cls.warningWrapper}>
			<Text
				size={TextSize.L}
				content={t('empty-articles-list')}
			/>
		</div>
	}

	return <LazyReducerLoader
		reducers={reducers}
		removeAfterUnmount={false}
	>
		<PageWrapper
			className={classNames(cls.ArticlesPage, {}, [className])}
			onScrollEnd={onLoadNextPart}
			watchedScroll={true}
		>
			<ArticlesPageFilters />
			{content}
		</PageWrapper>
	</LazyReducerLoader>
}

export default memo(ArticlesPage)