import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleTypeTabs, ArticlesTypesType } from '@/entities/ArticleTypeTabs'
import { SortSelector, SortVariantType } from '@/entities/SortSelector'
import classNames from '@/shared/lib/classNames/classNames'
import { SortOrderType } from '@/shared/types/types'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppInput } from '@/shared/ui/redesigned/AppInput'
import { VStack } from '@/shared/ui/redesigned/VStack'
import cls from './ArticlesFilters.module.scss'

export interface ArticlesFiltersProps {
	className?: string
	filter?: ArticlesTypesType
	order?: SortOrderType
	search?: string
	sort?: SortVariantType
	changeSort?: (value: string) => void
	changeOrder?: (value: string) => void
	changeSearch?: (value: string) => void
	changeFilter: (value: string) => void
	'data-testid'?: string
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = memo((props: ArticlesFiltersProps) => {
	const {
		className,
		filter = 'ALL',
		order,
		search,
		sort,
		changeSort,
		changeOrder,
		changeSearch,
		changeFilter,
		'data-testid': dataTestId = 'articles-filter',
	} = props

	const { t } = useTranslation('article')

	return (
		<AppCard
			className={classNames(cls.ArticlesFilters, {}, [className])}
			radius='big'
			padding='24'
		>
			<VStack gap='40'>
				<AppInput
					placeholder={t('search-input-placeholder')}
					value={search}
					onChange={changeSearch}
					data-testid={`${dataTestId}-search`}
				/>
				<ArticleTypeTabs filter={filter} onTabClick={changeFilter} />
				<SortSelector
					order={order}
					sort={sort}
					onChangeOrder={changeOrder}
					onChangeSort={changeSort}
				/>
			</VStack>
		</AppCard>
	)
})
