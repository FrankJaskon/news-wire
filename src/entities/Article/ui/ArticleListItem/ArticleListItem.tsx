import { FC, HTMLAttributeAnchorTarget, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticleType, ViewVariantType } from '../../model/types/Article'
import { ArticleListItem as ArticleListItemDeprecated } from './deprecated/ArticleListItem'
import { ArticleListItem as ArticleListItemRedesigned } from './redesigned/ArticleListItem'

export interface ArticleListItemProps {
	className?: string
	article?: ArticleType
	view?: ViewVariantType
	target?: HTMLAttributeAnchorTarget
	'data-testid'?: string
}

export const ArticleListItem: FC<ArticleListItemProps> = memo((props: ArticleListItemProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ArticleListItemRedesigned {...props} />}
			off={<ArticleListItemDeprecated {...props} />}
		/>
	)
})
