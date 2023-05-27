import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { SortOrder, SortOrderType } from '@/shared/types/types'
import { Select, SelectOption } from '@/shared/ui/deprecated/Popups'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { SortVariant, SortVariantType } from '../../model/types/SortSelectorTypes'

interface SortSelectorProps {
	className?: string
	sort?: SortVariantType
	order?: SortOrderType
	onChangeSort?: (value: SortVariantType) => void
	onChangeOrder?: (value: SortOrderType) => void
}

export const SortSelector: FC<SortSelectorProps> = memo((props: SortSelectorProps) => {
	const { className, sort, order, onChangeSort, onChangeOrder } = props
	const { t } = useTranslation('article')

	const orderOptionList: SelectOption<SortOrderType>[] = useMemo(
		() =>
			Object.values(SortOrder).map(order => ({
				label: t(`order.${order}`),
				value: order,
			})),
		[t]
	)

	const sortingOptionList: SelectOption<SortVariantType>[] = useMemo(
		() =>
			Object.values(SortVariant).map(sort => ({
				label: t(`sort-by.${sort}`),
				value: sort,
			})),
		[t]
	)

	const selectedOrder = useMemo(
		() => orderOptionList.find(item => item.value === order),
		[order, orderOptionList]
	)

	const selectedSort = useMemo(
		() => sortingOptionList.find(item => item.value === sort),
		[sort, sortingOptionList]
	)

	const handleChangeOrder = useCallback(
		(value: SelectOption<SortOrderType>) => {
			onChangeOrder?.(value.value as SortOrderType)
		},
		[onChangeOrder]
	)

	const handleChangeSort = useCallback(
		(value: SelectOption<SortVariantType>) => {
			onChangeSort?.(value.value as SortVariantType)
		},
		[onChangeSort]
	)

	return (
		<HStack gap='8' className={className}>
			<Select
				value={selectedSort}
				onChange={handleChangeSort}
				options={sortingOptionList}
				name='sort-select'
				readonly={false}
			/>
			<Select
				value={selectedOrder}
				onChange={handleChangeOrder}
				options={orderOptionList}
				name='order-select'
				readonly={false}
			/>
		</HStack>
	)
})
