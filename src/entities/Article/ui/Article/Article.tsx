import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleType } from '../../model/types/Article'
import { Article as ArticleDeprecated } from './deprecated/Article'
import { Article as ArticleRedesigned } from './redesigned/Article'

export interface ArticleDetailsProps {
	className?: string
	article: ArticleType
	isLoading?: boolean
	error?: string
}

export const Article: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ArticleRedesigned {...props} />}
			off={<ArticleDeprecated {...props} />}
		/>
	)
})
