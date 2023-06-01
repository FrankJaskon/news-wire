import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleRecommendationsList as ArticleRecommendationsListDeprecated } from './deprecated/ArticleRecommendationsList'
import { ArticleRecommendationsList as ArticleRecommendationsListRedesigned } from './redesigned/ArticleRecommendationsList'

export interface ArticleRecommendationsListProps {
	className?: string
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo(
	(props: ArticleRecommendationsListProps) => {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<ArticleRecommendationsListRedesigned {...props} />}
				off={<ArticleRecommendationsListDeprecated {...props} />}
			/>
		)
	}
)
