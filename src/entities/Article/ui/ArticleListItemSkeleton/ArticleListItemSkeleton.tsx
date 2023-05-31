import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ViewVariantType } from '../../model/types/Article'
import { ArticleListItemSkeleton as ArticleListItemSkeletonDeprecated } from './deprecated/ArticleListItemSkeleton'
import { ArticleListItemSkeleton as ArticleListItemSkeletonRedesigned } from './redesigned/ArticleListItemSkeleton'

export interface ArticleListItemSkeletonProps {
	view?: ViewVariantType
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = memo(
	(props: ArticleListItemSkeletonProps) => {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<ArticleListItemSkeletonRedesigned {...props} />}
				off={<ArticleListItemSkeletonDeprecated {...props} />}
			/>
		)
	}
)
