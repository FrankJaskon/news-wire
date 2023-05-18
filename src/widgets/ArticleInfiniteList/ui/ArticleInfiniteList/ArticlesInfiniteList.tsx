import { FC, ReactNode, memo, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ArticleList, ViewVariant } from '@/entities/Article'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { Text, TextSize, TextVariant } from '@/shared/ui/Text'
import {
	useArticleInfiniteListError,
	useArticleInfiniteListIsLoading,
	useArticleInfiniteListLimit,
	useArticleInfiniteListView,
} from '../../model/selectors/articleInfiniteListSelector'
import {
	articlesInfiniteListActions,
	getArticles,
} from '../../model/slice/articlesInfiniteListSlice'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'

export interface ArticleInfiniteListProps {
	isReducerMounted?: boolean
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo(
	(props: ArticleInfiniteListProps) => {
		const { isReducerMounted } = props
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

		let content: ReactNode = useMemo(
			() => (
				<ArticleList articles={articles} view={view} isLoading={isLoading} limit={limit} />
			),
			[articles, view, isLoading, limit]
		)

		if (error) {
			content = (
				<Text
					variant={TextVariant.ERROR}
					size={TextSize.L}
					content={t('error.server-error')}
				/>
			)
		}

		if (!isLoading && !articles.length && !error) {
			content = <Text size={TextSize.L} content={t('empty-articles-list')} />
		}

		return (
			<>
				<ArticlesPageFilters isReducerMounted={isReducerMounted} />
				{content}
			</>
		)
	}
)
