import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { DirectionType, DropdownItem } from '@/shared/ui/deprecated/Popups'
import { EditableArticleType } from '../../../model/types/editableArticleScheme'
import { OptionsDropdown as OptionsDropdownDeprecated } from './deprecated/OptionsDropdown'
import { OptionsDropdown as OptionsDropdownRedesigned } from './redesigned/OptionsDropdown'

export interface OptionsDropdownProps {
	className?: string
	options: ArticleOptionDropdownItem[][]
	absolute?: boolean
	direction?: DirectionType
}

export interface ArticleOptionDropdownItem extends DropdownItem {
	name?: keyof EditableArticleType
}

export const OptionsDropdown: FC<OptionsDropdownProps> = memo((props: OptionsDropdownProps) => {
	const { options, ...otherProps } = props

	const redesignedOptions = options.flat()

	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<OptionsDropdownRedesigned {...otherProps} options={redesignedOptions} />}
			off={<OptionsDropdownDeprecated {...otherProps} options={options} />}
		/>
	)
})
