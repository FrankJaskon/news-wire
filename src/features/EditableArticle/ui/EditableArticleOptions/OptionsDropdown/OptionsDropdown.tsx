import { FC } from 'react'
import AddIcon from '@/shared/assets/icons/add.svg'
import classNames from '@/shared/lib/classNames/classNames'
import { Dropdown } from '@/shared/ui/Popups'
import { DirectionType } from '@/shared/ui/Popups/styles/consts'
import { DropdownItem } from '@/shared/ui/Popups/ui/Dropdown/Dropdown'
import { EditableArticleType } from '../../../model/types/editableArticleScheme'
import { OptionIcon } from '../OptionIcon/OptionIcon'
import cls from './OptionsDropdown.module.scss'

export interface OptionsDropdownProps {
	className?: string
	options: ArticleOptionDropdownItem[][]
	absolute?: boolean
	direction?: DirectionType
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
				trigger={<OptionIcon icon={AddIcon} className={cls.iconWrapper} />}
				direction={direction}
				className={cls.trigger}
				align='start'
			/>
		</div>
	)
}
