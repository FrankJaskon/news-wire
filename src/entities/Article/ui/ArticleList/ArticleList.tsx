import { ArticleType } from '../../model/types/ArticleDetailsScheme'
import { FC, useCallback } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { ValueOf } from 'shared/config/types/types'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

export interface ArticleListProps {
	className?: string
	articles: ArticleType[]
	isLoading?: boolean
	view?: ViewVariantType
}

export const ViewVariant = {
	GRID: 'grid',
	LIST: 'list'
} as const

export type ViewVariantType = ValueOf<typeof ViewVariant>

export const ArticleList: FC<ArticleListProps> = (props) => {
	const {
		className,
		articles,
		view = ViewVariant.GRID,
		isLoading
	} = props

	const renderArticle = useCallback((article: ArticleType) => (
		<ArticleListItem
			key={article.id}
			article={article}
			view={view}
			isLoading={isLoading}
		/>
	), [isLoading, view])

	const getSkeletons = useCallback((view: ViewVariantType) => {
		return new Array(view === ViewVariant.GRID ? 9 : 3)
			.fill(0).map((item, index) => <ArticleListItem
				key={index}
				view={view}
				isLoading={isLoading}
			/>)
	}, [isLoading])

	if (isLoading) {
		return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{getSkeletons(view)}
		</div>
	}

	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.length > 0
				? articles.map(renderArticle)
				: null
			}
		</div>
	)
}