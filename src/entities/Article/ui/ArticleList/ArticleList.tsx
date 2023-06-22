import { FC, HTMLAttributeAnchorTarget, memo, useCallback } from 'react'
import { getArticleDetailsRoute } from '@/shared/const/RoutPaths'
import classNames from '@/shared/lib/classNames/classNames'
import { toggleFeatures } from '@/shared/lib/features'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { ViewVariant } from '../../model/consts/articleDetailsConsts'
import { ArticleType, ViewVariantType } from '../../model/types/Article'
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
	isOneLine?: boolean
	'data-testid'?: string
	textOnly?: boolean
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
	const {
		className,
		articles,
		view = ViewVariant.GRID,
		isLoading,
		limit = view === ViewVariant.GRID ? 9 : 3,
		isOneLine = false,
		target,
		'data-testid': datTestId = 'articles-list',
		textOnly = false,
	} = props

	const renderArticle = useCallback(
		(article: ArticleType) => (
			<ArticleListItem key={article.id} article={article} view={view} target={target} />
		),
		[view, target]
	)

	const getSkeletons = useCallback(
		(view?: ViewVariantType) => {
			return new Array(limit).fill(0).map((_, index) => {
				if (view) {
					return <ArticleListItemSkeleton key={index} view={view} />
				}
				return <Skeleton height={32} key={index} />
			})
		},
		[limit]
	)

	if (textOnly) {
		return (
			<VStack gap='8' className={cls.ArticleTextList} data-testid={datTestId}>
				{articles && articles.length > 0
					? articles.map(article => {
							if (article.id) {
								return (
									<AppLink
										key={article.id}
										to={getArticleDetailsRoute(article.id)}
									>
										{article.title}
									</AppLink>
								)
							}
							return null
					  })
					: null}
				{isLoading && getSkeletons()}
			</VStack>
		)
	}

	return (
		<div
			className={classNames(
				toggleFeatures({
					name: 'isAppRedesigned',
					on: () => cls.ArticleList,
					off: () => cls.ArticleListDeprecated,
				}),
				{
					[cls.oneLine]: isOneLine,
				},
				[className, cls[view]]
			)}
			data-testid={datTestId}
		>
			{articles && articles.length > 0 ? articles.map(renderArticle) : null}
			{isLoading && getSkeletons(view)}
		</div>
	)
})
