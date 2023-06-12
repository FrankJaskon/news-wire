import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TabItem, Tabs } from '@/shared/ui/redesigned/Tabs'
import { ArticlesTypes, ArticlesTypesType } from '../../model/types/tabs'

export interface ArticleTypeTabsProps {
	className?: string
	filter: ArticlesTypesType | ArticlesTypesType[]
	onTabClick: (value: string) => void
	editMode?: boolean
	light?: boolean
}

interface FilterTabsType extends TabItem {
	value: ArticlesTypesType
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props: ArticleTypeTabsProps) => {
	const { className, filter, onTabClick, editMode = false } = props

	const { t } = useTranslation('article')

	const tabs: FilterTabsType[] = useMemo(() => {
		return Object.values(ArticlesTypes)
			.filter(value => !editMode || value !== ArticlesTypes.ALL)
			.map(value => ({
				value,
				content: t(`filter.${value}`),
			}))
	}, [editMode, t])

	const handleOnTabClick = useCallback(
		(value: TabItem) => {
			onTabClick(value.value)
		},
		[onTabClick]
	)

	return (
		<Tabs
			className={className}
			tabs={tabs}
			value={Array.isArray(filter) ? filter : [filter]}
			onTabClick={handleOnTabClick}
			direction='column'
		/>
	)
})
