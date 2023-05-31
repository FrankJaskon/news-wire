import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleDetailsPage as ArticleDetailsPageDeprecated } from './deprecated/ArticleDetailsPage'
import { ArticleDetailsPage as ArticleDetailsPageRedesigned } from './redesigned/ArticleDetailsPage'

export interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = props => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ArticleDetailsPageRedesigned {...props} />}
			off={<ArticleDetailsPageDeprecated {...props} />}
		/>
	)
}

export default memo(ArticleDetailsPage)
