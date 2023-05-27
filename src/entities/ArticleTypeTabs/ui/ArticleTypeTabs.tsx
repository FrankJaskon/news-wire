import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ArticlesTypesType } from '../model/types/tabs'
import { ArticleTypeTabs as ArticleTypeTabsDeprecated } from './deprecated/ArticleTypeTabs'
import { ArticleTypeTabs as ArticleTypeTabsRedesigned } from './redesigned/ArticleTypeTabs'

export interface ArticleTypeTabsProps {
	className?: string
	filter: ArticlesTypesType | ArticlesTypesType[]
	onTabClick: (value: string) => void
	editMode?: boolean
	light?: boolean
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props: ArticleTypeTabsProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ArticleTypeTabsRedesigned {...props} />}
			off={<ArticleTypeTabsDeprecated {...props} />}
		/>
	)
})
