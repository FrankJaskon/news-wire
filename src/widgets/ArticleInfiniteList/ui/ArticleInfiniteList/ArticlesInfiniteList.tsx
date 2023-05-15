import { FC, ReactNode, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ArticleList } from '@/entities/Article'
import { Text, TextSize, TextVariant } from '@/shared/ui/Text'
import {
	getError,
	getIsLoading,
	getLimit,
	getView,
} from '../../model/selectors/articlesPageSelector'
import { getArticles } from '../../model/slice/articlesInfiniteListSlice'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'

export interface ArticleInfiniteListProps {
	isReducerMounted?: boolean
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo(
	(props: ArticleInfiniteListProps) => {
		const { isReducerMounted } = props
		const { t } = useTranslation('article')
		const articles = useSelector(getArticles.selectAll)
		const isLoading = useSelector(getIsLoading)
		const view = useSelector(getView)
		const limit = useSelector(getLimit)
		const error = useSelector(getError)

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
