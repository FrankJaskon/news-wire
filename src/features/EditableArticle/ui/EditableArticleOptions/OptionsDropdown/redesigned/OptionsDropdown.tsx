import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import {
	FloatDropdown,
	FloatDropdownItemType,
} from '@/shared/ui/redesigned/Popups/FloatDropdown/FloatDropdown'
import { AppTooltip } from '@/shared/ui/redesigned/Tooltip/AppTooltip'
import { EditableArticleType } from '../../../../model/types/editableArticleScheme'
import { OptionIcon } from '../../OptionIcon/OptionIcon'

export interface OptionsDropdownProps {
	className?: string
	options?: OptionDropdownItems
}

export interface ArticleOptionDropdownItem {
	name?: keyof EditableArticleType
}

export type OptionDropdownItems = (ArticleOptionDropdownItem & FloatDropdownItemType)[]

export const OptionsDropdown: FC<OptionsDropdownProps> = memo((props: OptionsDropdownProps) => {
	const { options } = props

	const { t } = useTranslation('article')

	return (
		<AppTooltip tooltip={t('tooltips.block-options')} as='div'>
			<FloatDropdown items={options} trigger={<OptionIcon />} />
		</AppTooltip>
	)
})
