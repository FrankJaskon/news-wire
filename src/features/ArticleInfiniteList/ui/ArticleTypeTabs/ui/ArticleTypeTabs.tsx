import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TabItem, Tabs } from '@/shared/ui/Tab/ui/Tabs'
import { ArticlesTypes, ArticlesTypesType } from '../model/types/tabs'
import { TabVariant } from '@/shared/ui/Tab'

export interface ArticleTypeTabsProps {
	className?: string
	filter: ArticlesTypesType
	onTabClick: (value: string) => void
}

interface FilterTabsType extends TabItem {
	value: ArticlesTypesType
	content: string
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = memo((props: ArticleTypeTabsProps) => {
	const {
		className,
		filter,
		onTabClick
	} = props

	const { t } = useTranslation('article')


	const tabs: FilterTabsType[] = useMemo(() => Object.values(ArticlesTypes)
		.map(value => ({
			value,
			content: t(`filter.${value}`)
		})), [t])

	return (
		<Tabs
			className={className}
			tabs={tabs}
			value={filter}
			onTabClick={onTabClick}
			variant={TabVariant.SECONDARY}
		/>
	)
})