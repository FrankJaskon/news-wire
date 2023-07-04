import { TFunction } from 'i18next'
import { AppDispatch } from '@/app/providers/StoreProvider'
import { FloatDropdownItemType } from '@/shared/ui/redesigned/Popups/FloatDropdown/FloatDropdown'
import { editableArticleActions } from '../../slice/editableArticleSlice'
import { InsertDirectionType } from '../../types/editableArticleScheme'

interface UseGetGeneralOptionsProps {
	dispatch: AppDispatch
	t: TFunction<'article', undefined, 'article'>
	targetId: number
}

interface UseGetGeneralOptionsReturnedType {
	addNewBlocksOption: FloatDropdownItemType
	moveBlockTo: FloatDropdownItemType
}

type UseGetGeneralOptionsType = (
	props: UseGetGeneralOptionsProps
) => UseGetGeneralOptionsReturnedType

export const useGetGeneralOptions: UseGetGeneralOptionsType = ({ dispatch, t, targetId }) => {
	const startArguments: { to: InsertDirectionType; id?: number } = {
		to: 'start',
		id: targetId,
	}
	const endArguments: { to: InsertDirectionType; id?: number } = { to: 'end', id: targetId }

	return {
		addNewBlocksOption: {
			trigger: t('editable-article.options.block-option'),
			items: [
				{
					label: t('editable-article.options.add-text-block'),
					onClick: () => {
						dispatch(editableArticleActions.addNewTextBlock(endArguments))
					},
				},
				{
					label: t('editable-article.options.add-img-block'),
					onClick: () => {
						dispatch(editableArticleActions.addNewImageBlock(endArguments))
					},
				},
				{
					label: t('editable-article.options.add-code-block'),
					onClick: () => {
						dispatch(editableArticleActions.addNewCodeBlock(endArguments))
					},
				},
				{
					label: t('editable-article.options.add-video-block'),
					onClick: () => {
						dispatch(editableArticleActions.addNewVideoBlock(endArguments))
					},
				},
			],
		},
		moveBlockTo: {
			trigger: t('editable-article.options.move-option'),
			items: [
				{
					label: t('editable-article.options.move-up'),
					onClick: () => {
						dispatch(editableArticleActions.moveEditableBlock(startArguments))
					},
					disabled: false,
				},
				{
					label: t('editable-article.options.move-down'),
					onClick: () => {
						dispatch(editableArticleActions.moveEditableBlock(endArguments))
					},
					disabled: false,
				},
			],
		},
	}
}
