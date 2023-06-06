import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleTypeTabs, ArticlesTypesType } from '@/entities/ArticleTypeTabs'
import { SortSelector, SortVariantType } from '@/entities/SortSelector'
import SearchIcon from '@/shared/assets/icons/search.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { SortOrderType } from '@/shared/types/types'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppIcon } from '@/shared/ui/redesigned/AppIcon'
import { AppInput } from '@/shared/ui/redesigned/AppInput'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
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
	isLoading?: boolean
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
		isLoading,
	} = props

	const { t } = useTranslation('article')

	if (isLoading) {
		return (
			<AppCard
				className={classNames(cls.ArticlesFilters, {}, [className])}
				radius='big'
				padding='24'
			>
				<VStack gap='40'>
					<Skeleton height={32} border='48px' />
					<VStack gap='8'>
						<Skeleton height={36} width={'50%'} border='32px' />
						<Skeleton height={36} width={'50%'} border='32px' />
						<Skeleton height={36} width={'50%'} border='32px' />
					</VStack>
					<VStack gap='8'>
						<Skeleton height={36} width={'50%'} border='32px' />
						<Skeleton height={36} width={'50%'} border='32px' />
						<Skeleton height={36} width={'50%'} border='32px' />
					</VStack>
				</VStack>
			</AppCard>
		)
	}

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
					size='small'
					onChange={changeSearch}
					data-testid={`${dataTestId}-search`}
					addonLeft={<AppIcon Svg={SearchIcon} />}
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
