import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleEditing as ArticleEditingDeprecated } from './deprecated/ArticleEditing'
import { ArticleEditing as ArticleEditingRedesigned } from './redesigned/ArticleEditing'

export interface ArticleEditingProps {
	className?: string
	articleId?: number
	ifCanEdit?: boolean
}

export const ArticleEditing: FC<ArticleEditingProps> = memo((props: ArticleEditingProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ArticleEditingRedesigned {...props} />}
			off={<ArticleEditingDeprecated {...props} />}
		/>
	)
})
