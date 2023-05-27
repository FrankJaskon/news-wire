import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { SortOrder, SortOrderType } from '@/shared/types/types'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { ListBox, ListBoxItem } from '@/shared/ui/redesigned/Popups'
import { VStack } from '@/shared/ui/redesigned/VStack'
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

	const orderOptionList: ListBoxItem[] = useMemo(
		() =>
			Object.values(SortOrder).map(order => ({
				content: t(`order.${order}`),
				value: order,
			})),
		[t]
	)

	const sortingOptionList: ListBoxItem[] = useMemo(
		() =>
			Object.values(SortVariant).map(sort => ({
				content: t(`sort-by.${sort}`),
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
		(value: string) => {
			onChangeOrder?.(value as SortOrderType)
		},
		[onChangeOrder]
	)

	const handleChangeSort = useCallback(
		(value: string) => {
			onChangeSort?.(value as SortVariantType)
		},
		[onChangeSort]
	)

	return (
		<VStack gap='8' className={className}>
			<AppText text={t('sort-by.header')} />
			<ListBox
				value={selectedSort?.value}
				onChange={handleChangeSort}
				items={sortingOptionList}
				defaultValue={t('sort-by.createdAt')}
				readonly={false}
			/>
			<ListBox
				value={selectedOrder?.value}
				onChange={handleChangeOrder}
				items={orderOptionList}
				defaultValue={t('order.desc')}
				readonly={false}
			/>
		</VStack>
	)
})
