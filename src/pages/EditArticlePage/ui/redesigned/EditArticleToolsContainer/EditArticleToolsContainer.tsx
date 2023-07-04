import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useUserAuthData } from '@/entities/User'
import {
	createNewArticle,
	editableArticleActions,
	removeArticle,
	updateArticle,
	useEditableArticleForm,
	useEditableArticleIsEdited,
	useEditableArticleMode,
} from '@/features/EditableArticle'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { EditArticleToolType, EditArticleTools } from '@/widgets/EditArticleTools'

export interface EditArticleToolsContainerProps {
	className?: string
}

export const EditArticleToolsContainer: FC<EditArticleToolsContainerProps> = memo(
	(props: EditArticleToolsContainerProps) => {
		const { className } = props
		const { t } = useTranslation('article')
		const dispatch = useAppDispatch()
		const articleForm = useEditableArticleForm()
		const isEdit = useEditableArticleIsEdited()
		const isPreview = useEditableArticleMode() === 'preview'
		const userData = useUserAuthData()

		const addOptions: EditArticleToolType[] = useMemo(
			() => [
				{
					name: 'subtitle',
					label: t('editable-article.options.add-subtitle'),
					onClick: () => {
						dispatch(
							editableArticleActions.setArticleData({
								isSubtitle: true,
							})
						)
					},
					disabled: articleForm.isSubtitle,
				},
				{
					name: 'img',
					label: t('editable-article.options.add-img'),
					onClick: () => {
						dispatch(
							editableArticleActions.setArticleData({
								isImg: true,
							})
						)
					},
					disabled: articleForm.isImg,
				},
				{
					trigger: t('editable-article.options.add-text-block'),
					items: [
						{
							label: t('editable-article.options.start'),
							onClick: () => {
								dispatch(editableArticleActions.addNewTextBlock({ to: 'start' }))
							},
						},
						{
							label: t('editable-article.options.end'),
							onClick: () => {
								dispatch(editableArticleActions.addNewTextBlock({ to: 'end' }))
							},
						},
					],
				},
				{
					trigger: t('editable-article.options.add-code-block'),
					items: [
						{
							label: t('editable-article.options.start'),
							onClick: () => {
								dispatch(editableArticleActions.addNewCodeBlock({ to: 'start' }))
							},
						},
						{
							label: t('editable-article.options.end'),
							onClick: () => {
								dispatch(editableArticleActions.addNewCodeBlock({ to: 'end' }))
							},
						},
					],
				},
				{
					trigger: t('editable-article.options.add-img-block'),
					items: [
						{
							label: t('editable-article.options.start'),
							onClick: () => {
								dispatch(editableArticleActions.addNewImageBlock({ to: 'start' }))
							},
						},
						{
							label: t('editable-article.options.end'),
							onClick: () => {
								dispatch(editableArticleActions.addNewImageBlock({ to: 'end' }))
							},
						},
					],
				},
				{
					trigger: t('editable-article.options.add-video-block'),
					items: [
						{
							label: t('editable-article.options.start'),
							onClick: () => {
								dispatch(editableArticleActions.addNewVideoBlock({ to: 'start' }))
							},
						},
						{
							label: t('editable-article.options.end'),
							onClick: () => {
								dispatch(editableArticleActions.addNewVideoBlock({ to: 'end' }))
							},
						},
					],
				},
			],
			[articleForm.isImg, articleForm.isSubtitle, dispatch, t]
		)

		const generalOptions: EditArticleToolType[] = useMemo(
			() => [
				{
					label: isEdit
						? t('editable-article.options.save-article')
						: t('editable-article.options.create-article'),
					onClick: () => {
						if (isEdit) {
							dispatch(updateArticle())
						} else {
							dispatch(createNewArticle())
						}
					},
					type: 'save',
				},
				{
					label: t('editable-article.options.reset-article'),
					onClick: () => {
						dispatch(editableArticleActions.resetChanges())
					},
					type: 'normal',
				},
				{
					label: t('editable-article.options.remove-article'),
					onClick: () => {
						dispatch(removeArticle())
					},
					disabled: !isEdit,
					type: 'cancel',
				},
			],
			[dispatch, isEdit, t]
		)

		if (isPreview) {
			return null
		}

		return (
			<VStack gap='16'>
				<EditArticleTools
					className={className}
					items={addOptions}
					avatar={userData?.avatar}
					username={userData?.username}
					userId={userData?.id}
				/>
				<EditArticleTools className={className} items={generalOptions} />
			</VStack>
		)
	}
)
