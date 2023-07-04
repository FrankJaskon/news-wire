import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { OptionDropdownItems } from '../../../ui/EditableArticleOptions/OptionsDropdown/redesigned/OptionsDropdown'
import { editableArticleActions } from '../../slice/editableArticleSlice'
import { useGetGeneralOptions } from './useGetGeneralOptions'

type BlockVariant = 'video' | 'code'

export type UseGetEditableBlockDropdownOptionsType = (
	id: number,
	variant?: BlockVariant
) => OptionDropdownItems

export const useGetEditableBlockDropdownOptions: UseGetEditableBlockDropdownOptionsType = (
	targetId,
	variant
) => {
	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()
	const currentVariant = variant ?? 'code'

	const { moveBlockTo, addNewBlocksOption } = useGetGeneralOptions({
		dispatch,
		t,
		targetId,
	})

	return [
		moveBlockTo,
		addNewBlocksOption,
		{
			trigger: t('editable-article.options.remove-option'),
			items: [
				{
					label:
						currentVariant === 'video'
							? t('editable-article.options.remove-video-block')
							: t('editable-article.options.remove-code-block'),
					onClick: () => {
						dispatch(editableArticleActions.removeBlock(targetId))
					},
				},
			],
		},
	]
}
