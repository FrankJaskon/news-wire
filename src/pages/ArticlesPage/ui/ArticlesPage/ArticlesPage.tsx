import { ArticleList, ViewVariant, ViewVariantType } from 'entities/Article'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice'
import { FC, memo, useState } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { AppButton } from 'shared/ui/AppButton'
import cls from './ArticlesPage.module.scss'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useSelector } from 'react-redux'
import { getError, getIsLoading, getView } from '../../model/selectors/articlesPageSelector'
import { ViewToggler } from 'features/ViewToggler'
import { VIEW_ARTICLES_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'

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
	const error = useSelector(getError)

	useInitialEffect(() => {
		dispatch(fetchArticlesList())
		dispatch(articlesPageActions.setView(
			localStorage.getItem(VIEW_ARTICLES_LOCAL_STORAGE_KEY) as ViewVariantType || ViewVariant.GRID))
	})

	const changeView = (value: ViewVariantType) => {
		if (view !== value) {
			dispatch(articlesPageActions.setView(value))
			localStorage.setItem(VIEW_ARTICLES_LOCAL_STORAGE_KEY, value)
		}
	}

	return <LazyReducerLoader reducers={reducers}>
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
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
			/>
		</div>
	</LazyReducerLoader>
}

export default memo(ArticlesPage)