import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { SortOrderType } from '@/shared/types/types'
import { SortVariantType } from '../model/types/SortSelectorTypes'
import { SortSelector as SortSelectorDeprecated } from './deprecated/SortSelector'
import { SortSelector as SortSelectorRedesigned } from './redesigned/SortSelector'

interface SortSelectorProps {
	className?: string
	sort?: SortVariantType
	order?: SortOrderType
	onChangeSort?: (value: SortVariantType) => void
	onChangeOrder?: (value: SortOrderType) => void
}

export const SortSelector: FC<SortSelectorProps> = memo((props: SortSelectorProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<SortSelectorRedesigned {...props} />}
			off={<SortSelectorDeprecated {...props} />}
		/>
	)
})
