import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { OptionDropdownItems } from '../../../ui/EditableArticleOptions/OptionsDropdown/redesigned/OptionsDropdown'
import { editableArticleActions } from '../../slice/editableArticleSlice'
import { useGetGeneralOptions } from './useGetGeneralOptions'

export type UseGetEditableImageBlockDropdownOptionsType = (
	id: number,
	isTitle: boolean
) => OptionDropdownItems

export const useGetEditableImageBlockDropdownOptions: UseGetEditableImageBlockDropdownOptionsType =
	(targetId, isTitle) => {
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
						label: t('editable-article.options.add-img-title'),
						onClick: () => {
							dispatch(
								editableArticleActions.setImageBlock({
									id: targetId,
									hasTitle: true,
									title: '',
								})
							)
						},
						disabled: isTitle,
					},
					addNewBlocksOption,
				],
			},
			{
				trigger: t('editable-article.options.remove-option'),
				items: [
					{
						label: t('editable-article.options.remove-img-title'),
						onClick: () => {
							dispatch(
								editableArticleActions.setImageBlock({
									id: targetId,
									hasTitle: false,
									title: '',
								})
							)
						},
						disabled: !isTitle,
					},
					{
						label: t('editable-article.options.remove-code-block'),
						onClick: () => {
							dispatch(editableArticleActions.removeBlock(targetId))
						},
						disabled: false,
					},
				],
			},
		] as OptionDropdownItems
	}
