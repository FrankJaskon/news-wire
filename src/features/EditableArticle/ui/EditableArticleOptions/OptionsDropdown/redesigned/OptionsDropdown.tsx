import { FC } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { DropdownDirection } from '@/shared/types/ui'
import { DropdownItem, Dropdown } from '@/shared/ui/redesigned/Popups'
import { EditableArticleType } from '../../../../model/types/editableArticleScheme'
import { OptionIcon } from '../../OptionIcon/OptionIcon'
import cls from './OptionsDropdown.module.scss'

export interface OptionsDropdownProps {
	className?: string
	options?: ArticleOptionDropdownItem[][]
	absolute?: boolean
	direction?: DropdownDirection
}

export interface ArticleOptionDropdownItem extends DropdownItem {
	name?: keyof EditableArticleType
}

export const OptionsDropdown: FC<OptionsDropdownProps> = props => {
	const { className, options, absolute = false, direction = 'bottom left' } = props

	return (
		<div
			className={classNames(
				cls.OptionsDropdown,
				{
					[cls.absolute]: absolute,
				},
				[className]
			)}
		>
			<Dropdown
				items={options}
				trigger={<OptionIcon />}
				direction={direction}
				className={cls.trigger}
				options={options}
			/>
		</div>
	)
}
