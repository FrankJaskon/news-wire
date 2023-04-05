import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { SortOrder, SortOrderType } from 'shared/types/types'
import { Select, SelectOption } from 'shared/ui/Select'
import { ArticlesSortVariant, ArticlesSortVariantType } from '../model/types/ArticlesSortSelectorTypes'
import cls from './ArticlesSortSelector.module.scss'

interface ArticlesSortSelectorProps {
	className?: string
	sort?: ArticlesSortVariantType
	order?: SortOrderType
	onChangeSort?: (value: ArticlesSortVariantType) => void
	onChangeOrder?: (value: SortOrderType) => void
}

export const ArticlesSortSelector: FC<ArticlesSortSelectorProps> = memo((props: ArticlesSortSelectorProps) => {
	const {
		className,
		sort,
		order,
		onChangeSort,
		onChangeOrder
	} = props
	const { t } = useTranslation('article')

	const orderOptionList: SelectOption[] = useMemo(() => Object.values(SortOrder).map(order => (
		{ label: t(`order.${order}`), value: order }
	)), [t])

	const sortingOptionList: SelectOption[] = useMemo(() => Object.values(ArticlesSortVariant).map(sort => (
		{ label: t(`sort-by.${sort}`), value: sort }
	)), [t])

	const selectedOrder = useMemo(() => orderOptionList.find((item) => item.value === order),
		[order, orderOptionList])

	const selectedSort = useMemo(() => sortingOptionList.find((item) => item.value === sort),
		[sort, sortingOptionList])

	const handleChangeOrder = useCallback((value: SelectOption) => {
		onChangeOrder?.(value.value as SortOrderType)
	}, [onChangeOrder])

	const handleChangeSort = useCallback((value: SelectOption) => {
		onChangeSort?.(value.value as ArticlesSortVariantType)
	}, [onChangeSort])

	return <div className={classNames(cls.ArticlesSortSelector, {}, [className])}>
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
	</div>
})