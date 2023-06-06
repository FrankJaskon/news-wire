import { FC, memo, useCallback } from 'react'
import { SortVariantType } from '@/entities/SortSelector'
import { SortOrderType } from '@/shared/types/types'
import { ArticlesFilters } from '@/widgets/ArticlesFilters'
import { useArticlesFilters, useInitSearchParams } from '../../hooks/useArticlesFilters'

interface ArticlesFiltersContainerProps {
	isLoading?: boolean
}

export const ArticlesFiltersContainer: FC<ArticlesFiltersContainerProps> = memo(
	(props: ArticlesFiltersContainerProps) => {
		const { isLoading } = props
		const { filter, order, search, sort, changeSort, changeOrder, changeSearch, changeFilter } =
			useArticlesFilters()

		useInitSearchParams()

		const onChangeSort = useCallback(
			(value: string) => {
				changeSort(value as SortVariantType)
			},
			[changeSort]
		)

		const onChangeOrder = useCallback(
			(value: string) => {
				changeOrder(value as SortOrderType)
			},
			[changeOrder]
		)

		return (
			<ArticlesFilters
				filter={filter}
				order={order}
				search={search}
				sort={sort}
				changeSort={onChangeSort}
				changeOrder={onChangeOrder}
				changeSearch={changeSearch}
				changeFilter={changeFilter}
				isLoading={isLoading}
			/>
		)
	}
)
