import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { randomInteger } from '@/shared/lib/randomInteger/randomInteger'
import { OptionDropdownItems } from '../../../ui/EditableArticleOptions/OptionsDropdown/redesigned/OptionsDropdown'
import { editableArticleActions } from '../../slice/editableArticleSlice'
import { useGetGeneralOptions } from './useGetGeneralOptions'

export type UseGetEditableTextBlockDropdownOptionsType = (
	id: number,
	isTitle: boolean
) => OptionDropdownItems

export const useGetEditableTextBlockDropdownOptions: UseGetEditableTextBlockDropdownOptionsType = (
	targetId,
	isTitle
) => {
	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()

	const { moveBlockTo, addNewBlocksOption } = useGetGeneralOptions({
		dispatch,
		t,
		targetId,
	})

	return [
		moveBlockTo,
		{
			trigger: t('editable-article.options.add-option'),
			items: [
				{
					label: t('editable-article.options.add-text-title'),
					onClick: () => {
						dispatch(
							editableArticleActions.setTextBlock({
								id: targetId,
								hasTitle: true,
								title: '',
							})
						)
					},
					disabled: isTitle,
				},
				{
					label: t('editable-article.options.add-text-paragraph'),
					onClick: () => {
						dispatch(
							editableArticleActions.setTextBlockParagraph({
								blockId: targetId,
								paragraphId: randomInteger(),
								value: '',
							})
						)
					},
				},
				addNewBlocksOption,
			],
		},
		{
			trigger: t('editable-article.options.remove-option'),
			items: [
				{
					label: t('editable-article.options.remove-text-title'),
					onClick: () => {
						dispatch(
							editableArticleActions.setTextBlock({
								id: targetId,
								hasTitle: false,
								title: '',
							})
						)
					},
					disabled: !isTitle,
				},
				{
					label: t('editable-article.options.remove-text-block'),
					onClick: () => {
						dispatch(editableArticleActions.removeBlock(targetId))
					},
				},
			],
		},
	]
}
