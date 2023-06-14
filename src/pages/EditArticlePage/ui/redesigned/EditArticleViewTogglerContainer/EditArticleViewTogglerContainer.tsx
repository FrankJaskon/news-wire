import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
	editableArticleActions,
	useEditableArticleMode,
	ViewMode,
} from '@/features/EditableArticle'
import { ViewPropsWithText, ViewToggler } from '@/features/ViewToggler'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'

interface EditArticleViewTogglerContainerProps {
	isLoading?: boolean
	ifCanEdit?: boolean
}

export const EditArticleViewTogglerContainer: FC<EditArticleViewTogglerContainerProps> = memo(
	(props: EditArticleViewTogglerContainerProps) => {
		const { isLoading, ifCanEdit } = props
		const { t } = useTranslation('article')
		const mode = useEditableArticleMode()
		const dispatch = useAppDispatch()

		const views: ViewPropsWithText<ViewMode>[] = useMemo(
			() => [
				{
					view: 'edit',
					content: t('editable-article.places.workplace'),
				},
				{
					view: 'preview',
					content: t('editable-article.places.preview'),
				},
			],
			[t]
		)

		const handleChangeView = useCallback(
			(newView: ViewMode) => {
				dispatch(editableArticleActions.setMode(newView))
			},
			[dispatch]
		)

		if (!ifCanEdit) {
			return null
		}

		return (
			<ViewToggler
				activeView={mode}
				onToggle={handleChangeView}
				isLoading={isLoading}
				viewsList={views}
				variant='editView'
			/>
		)
	}
)
