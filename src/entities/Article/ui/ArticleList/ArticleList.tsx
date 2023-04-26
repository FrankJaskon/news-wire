import { FC, HTMLAttributeAnchorTarget, memo, useCallback } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { ViewVariant } from '../../model/consts/articleDetailsConsts'
import { ArticleType, ViewVariantType } from '../../model/types/ArticleDetailsScheme'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import cls from './ArticleList.module.scss'

export interface ArticleListProps {
	className?: string
	articles?: ArticleType[]
	isLoading?: boolean
	view?: ViewVariantType
	limit?: number
	target?: HTMLAttributeAnchorTarget
	error?: string
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
	const {
		className,
		articles,
		view = ViewVariant.GRID,
		isLoading,
		limit = view === ViewVariant.GRID ? 9 : 3,
		target
	} = props

	const renderArticle = useCallback((article: ArticleType) => (
		<ArticleListItem
			key={article.id}
			article={article}
			view={view}
			target={target}
		/>
	), [view, target])

	const getSkeletons = useCallback((view: ViewVariantType) => {
		return new Array(limit)
			.fill(0).map((_, index) => <ArticleListItemSkeleton
				key={index}
				view={view}
			/>)
	}, [limit])

	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles && articles.length > 0
				? articles.map(renderArticle)
				: null
			}
			{isLoading && getSkeletons(view)}
		</div>
	)
})