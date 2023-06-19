import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { DirectionType, DropdownItem } from '@/shared/ui/deprecated/Popups'
import { NestedItem } from '@/shared/ui/redesigned/Popups/Dropdown/NestedDropdownItem/NestedDropdownItem'
import { EditableArticleType } from '../../../model/types/editableArticleScheme'
import { OptionsDropdown as OptionsDropdownDeprecated } from './deprecated/OptionsDropdown'
import { OptionsDropdown as OptionsDropdownRedesigned } from './redesigned/OptionsDropdown'

export interface OptionsDropdownProps {
	className?: string
	nested?: NestedItem[]
	options?: ArticleOptionDropdownItem[][]
	absolute?: boolean
	direction?: DirectionType
}

export interface ArticleOptionDropdownItem extends DropdownItem {
	name?: keyof EditableArticleType
}

export const OptionsDropdown: FC<OptionsDropdownProps> = memo((props: OptionsDropdownProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<OptionsDropdownRedesigned {...props} />}
			off={<OptionsDropdownDeprecated {...props} />}
		/>
	)
})
