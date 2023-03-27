import { ArticleList, ViewVariantType } from 'entities/Article'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
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
import { ViewToggler } from 'features/ViewToggler'
import { PageWrapper } from 'widgets/PageWrapper'
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { Text, TextVariant } from 'shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage'

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
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getIsLoading)
	const view = useSelector(getView)
	const limit = useSelector(getLimit)
	const error = useSelector(getError)

	useInitialEffect(() => {
		dispatch(initArticlesPage())
	})

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage())
	}, [dispatch])

	const changeView = useCallback((value: ViewVariantType) => {
		if (view !== value) {
			dispatch(articlesPageActions.setView(value))
		}
	}, [dispatch, view])

	let content: ReactNode = <>
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
	</>

	if (error) {
		content = <div className={cls.errorWrapper}>
			<Text
				variant={TextVariant.ERROR}
				content={t('error.server-error')}
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
		>
			{content}
		</PageWrapper>
	</LazyReducerLoader>
}

export default memo(ArticlesPage)