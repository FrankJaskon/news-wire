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
import { EditArticleToolType, EditArticleTools } from '@/widgets/EditArticleTools'

export interface EditArticleToolsContainerProps {
	className?: string
	ifCanEdit?: boolean
}

export const EditArticleToolsContainer: FC<EditArticleToolsContainerProps> = memo(
	(props: EditArticleToolsContainerProps) => {
		const { className, ifCanEdit } = props
		const { t } = useTranslation('article')
		const dispatch = useAppDispatch()
		const articleForm = useEditableArticleForm()
		const isEdit = useEditableArticleIsEdited()
		const isPreview = useEditableArticleMode() === 'preview'
		const userData = useUserAuthData()

		const options: EditArticleToolType[][] = useMemo(
			() => [
				[
					{
						name: 'subtitle',
						content: t('editable-article.options.add-subtitle'),
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
						content: t('editable-article.options.add-img'),
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
						content: t('editable-article.options.add-text-block'),
						options: [
							[
								{
									content: t('editable-article.options.start'),
									onClick: () => {
										dispatch(
											editableArticleActions.addNewTextBlock({ to: 'start' })
										)
									},
								},
								{
									content: t('editable-article.options.end'),
									onClick: () => {
										dispatch(
											editableArticleActions.addNewTextBlock({ to: 'end' })
										)
									},
								},
							],
						],
					},
					{
						content: t('editable-article.options.add-code-block'),
						options: [
							[
								{
									content: t('editable-article.options.start'),
									onClick: () => {
										dispatch(
											editableArticleActions.addNewCodeBlock({ to: 'start' })
										)
									},
								},
								{
									content: t('editable-article.options.end'),
									onClick: () => {
										dispatch(
											editableArticleActions.addNewCodeBlock({ to: 'end' })
										)
									},
								},
							],
						],
					},
					{
						content: t('editable-article.options.add-img-block'),
						options: [
							[
								{
									content: t('editable-article.options.start'),
									onClick: () => {
										dispatch(
											editableArticleActions.addNewImageBlock({ to: 'start' })
										)
									},
								},
								{
									content: t('editable-article.options.end'),
									onClick: () => {
										dispatch(
											editableArticleActions.addNewImageBlock({ to: 'end' })
										)
									},
								},
							],
						],
					},
					{
						content: t('editable-article.options.add-video-block'),
						options: [
							[
								{
									content: t('editable-article.options.start'),
									onClick: () => {
										dispatch(
											editableArticleActions.addNewVideoBlock({ to: 'start' })
										)
									},
								},
								{
									content: t('editable-article.options.end'),
									onClick: () => {
										dispatch(
											editableArticleActions.addNewVideoBlock({ to: 'end' })
										)
									},
								},
							],
						],
					},
				],
				[
					{
						content: isEdit
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
						content: t('editable-article.options.reset-article'),
						onClick: () => {
							dispatch(editableArticleActions.resetChanges())
						},
						type: 'normal',
					},
					{
						content: t('editable-article.options.remove-article'),
						onClick: () => {
							dispatch(removeArticle())
						},
						disabled: !isEdit,
						type: 'cancel',
					},
				],
			],
			[articleForm.isImg, articleForm.isSubtitle, dispatch, isEdit, t]
		)

		if (!ifCanEdit || isPreview) {
			return null
		}

		return (
			<EditArticleTools
				className={className}
				items={options}
				avatar={userData?.avatar}
				username={userData?.username}
				userId={userData?.id}
			/>
		)
	}
)
