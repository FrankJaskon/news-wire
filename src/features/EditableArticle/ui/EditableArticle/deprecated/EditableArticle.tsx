import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { EditableArticleBlockType } from '@/entities/Article'
import { ArticleCategoriesType } from '@/entities/ArticleCategory'
import { ArticleTypeTabs } from '@/entities/ArticleTypeTabs'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { AppCard } from '@/shared/ui/deprecated/AppCard'
import { AppInput } from '@/shared/ui/deprecated/AppInput'
import { AppLabel, LabelVariant } from '@/shared/ui/deprecated/Label'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { useEditableArticleForm } from '../../../model/selectors/editableArticleSelector'
import { createNewArticle } from '../../../model/services/createNewArticle'
import { removeArticle } from '../../../model/services/removeArticle'
import { updateArticle } from '../../../model/services/updateArticle'

import { editableArticleActions } from '../../../model/slice/editableArticleSlice'
import { EditableArticleType } from '../../../model/types/editableArticleScheme'
import { EditableArticleCodeBlock } from '../../EditableArticleCodeBlock/EditableArticleCodeBlock'
import { EditableArticleImageBlock } from '../../EditableArticleImageBlock/EditableArticleImageBlock'
import {
	ArticleOptionDropdownItem,
	OptionsDropdown,
} from '../../EditableArticleOptions/OptionsDropdown/OptionsDropdown'
import { EditableArticleTextBlock } from '../../EditableArticleTextBlock/EditableArticleTextBlock'
import { EditableArticleWithRemove } from '../../EditableArticleWithRemove/EditableArticleWithRemove'
import cls from './EditableArticle.module.scss'
import type { SetTextBlockParagraphProps } from '../../../model/slice/editableArticleSlice'

export interface EditableArticleProps {
	className?: string
	editMode?: boolean
}

export const EditableArticle: FC<EditableArticleProps> = memo((props: EditableArticleProps) => {
	const { className, editMode } = props
	const { t } = useTranslation('article')
	const dispatch = useAppDispatch()
	const articleForm = useEditableArticleForm()

	const isSubtitle = useMemo(
		() => articleForm?.subtitle || articleForm?.isSubtitle,
		[articleForm?.isSubtitle, articleForm?.subtitle]
	)

	const isImg = useMemo(
		() => articleForm?.img || articleForm?.isImg,
		[articleForm?.isImg, articleForm?.img]
	)

	const saveArticleData = useCallback(
		(key: keyof EditableArticleType, value: EditableArticleType[keyof EditableArticleType]) => {
			dispatch(
				editableArticleActions.setArticleData({
					[key]: value,
				})
			)
		},
		[dispatch]
	)

	const handleOnChangeTitle = useCallback(
		(value: string) => {
			saveArticleData('title', value)
		},
		[saveArticleData]
	)

	const handleOnChangeSubtitle = useCallback(
		(value: string) => {
			saveArticleData('subtitle', value)
		},
		[saveArticleData]
	)

	const handleOnChangeImg = useCallback(
		(value: string) => {
			saveArticleData('img', value)
		},
		[saveArticleData]
	)

	const handleOnRemoveSubtitle = useCallback(() => {
		dispatch(
			editableArticleActions.setArticleData({
				subtitle: '',
				isSubtitle: false,
			})
		)
	}, [dispatch])

	const handleOnRemoveImg = useCallback(() => {
		dispatch(
			editableArticleActions.setArticleData({
				img: '',
				isImg: false,
			})
		)
	}, [dispatch])

	const handleOnChangeParagraph = useCallback(
		(paragraph: SetTextBlockParagraphProps) => {
			dispatch(editableArticleActions.setTextBlockParagraph(paragraph))
		},
		[dispatch]
	)

	const handleOnRemoveParagraph = useCallback(
		(paragraph: SetTextBlockParagraphProps) => {
			dispatch(editableArticleActions.removeTextBlockParagraph(paragraph))
		},
		[dispatch]
	)

	const handleOnChangeTextTitle = useCallback(
		({ blockId, value }: { blockId: number; value: string }) => {
			dispatch(
				editableArticleActions.setTextBlock({
					id: blockId,
					title: value,
				})
			)
		},
		[dispatch]
	)

	const handleOnChangeCode = useCallback(
		({ blockId, value }: { blockId: number; value: string }) => {
			dispatch(
				editableArticleActions.setCodeBlock({
					id: blockId,
					code: value,
				})
			)
		},
		[dispatch]
	)

	const handleOnChangeImageTitle = useCallback(
		({ blockId, value }: { blockId: number; value: string }) => {
			dispatch(
				editableArticleActions.setImageBlock({
					id: blockId,
					title: value,
				})
			)
		},
		[dispatch]
	)

	const handleOnChangeImageSrc = useCallback(
		({ blockId, value }: { blockId: number; value: string }) => {
			dispatch(
				editableArticleActions.setImageBlock({
					id: blockId,
					src: value,
				})
			)
		},
		[dispatch]
	)

	const handleClickType = useCallback(
		() => (type: string) => {
			dispatch(editableArticleActions.setArticleType(type as ArticleCategoriesType))
		},
		[dispatch]
	)

	const renderEditableBlockContent = (block: EditableArticleBlockType) => {
		switch (block.type) {
			case 'IMAGE':
				return (
					<EditableArticleImageBlock
						key={`editable-article-block-${block.id}`}
						block={block}
						onChangeTitle={handleOnChangeImageTitle}
						onChangeSrc={handleOnChangeImageSrc}
					/>
				)
			case 'CODE':
				return (
					<EditableArticleCodeBlock
						key={`editable-article-block-${block.id}`}
						block={block}
						onChangeCode={handleOnChangeCode}
					/>
				)
			case 'TEXT':
				return (
					<EditableArticleTextBlock
						key={`editable-article-block-${block.id}`}
						block={block}
						onChangeTitle={handleOnChangeTextTitle}
						onChangeParagraph={handleOnChangeParagraph}
						onRemoveParagraph={handleOnRemoveParagraph}
					/>
				)
			default:
				return null
		}
	}

	const options: ArticleOptionDropdownItem[][] = useMemo(
		() => [
			[
				{
					name: 'subtitle',
					component: t('editable-article.options.add-subtitle'),
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
					component: t('editable-article.options.add-img'),
					onClick: () => {
						dispatch(
							editableArticleActions.setArticleData({
								isImg: true,
							})
						)
					},
					disabled: Boolean(articleForm.img),
				},
				{
					component: t('editable-article.options.add-text-block'),
					onClick: () => {
						dispatch(editableArticleActions.addNewTextBlock({ to: 'start' }))
					},
				},
				{
					component: t('editable-article.options.add-code-block'),
					onClick: () => {
						dispatch(editableArticleActions.addNewCodeBlock({ to: 'start' }))
					},
				},
				{
					component: t('editable-article.options.add-img-block'),
					onClick: () => {
						dispatch(editableArticleActions.addNewImageBlock({ to: 'start' }))
					},
				},
			],
			[
				{
					component: editMode ? t('save-article') : t('create-article'),
					onClick: () => {
						if (editMode) {
							dispatch(updateArticle())
						} else {
							dispatch(createNewArticle())
						}
					},
				},
				{
					component: t('editable-article.options.reset-article'),
					onClick: () => {
						dispatch(editableArticleActions.resetChanges())
					},
				},
				{
					component: t('editable-article.options.remove-article'),
					onClick: () => {
						dispatch(removeArticle())
					},
					disabled: !editMode,
				},
			],
		],
		[articleForm.img, articleForm.isSubtitle, dispatch, editMode, t]
	)

	return (
		<VStack gap='8' className={className}>
			<AppCard>
				<AppLabel variant={LabelVariant.PRIMARY} htmlFor='article-title'>
					{t('editable-article.labels.title')}
					<span className={cls.red}>*</span>
				</AppLabel>
				<AppInput
					id='article-title'
					value={articleForm?.title ?? ''}
					onChange={handleOnChangeTitle}
					placeholder={t('editable-article.placeholders.title')}
				/>
			</AppCard>
			{isSubtitle && (
				<EditableArticleWithRemove onRemove={handleOnRemoveSubtitle}>
					<AppCard max>
						<AppLabel variant={LabelVariant.PRIMARY} htmlFor='article-subtitle'>
							{t('editable-article.labels.subtitle')}
						</AppLabel>
						<AppInput
							id='article-subtitle'
							value={articleForm?.subtitle ?? ''}
							onChange={handleOnChangeSubtitle}
							placeholder={t('editable-article.placeholders.subtitle')}
						/>
					</AppCard>
				</EditableArticleWithRemove>
			)}
			{isImg && (
				<EditableArticleWithRemove onRemove={handleOnRemoveImg}>
					<AppCard max>
						<AppLabel variant={LabelVariant.PRIMARY} htmlFor='article-img'>
							{t('editable-article.labels.img')}
						</AppLabel>
						<AppInput
							id='article-img'
							value={articleForm?.img ?? ''}
							onChange={handleOnChangeImg}
							placeholder={t('editable-article.placeholders.img')}
						/>
					</AppCard>
				</EditableArticleWithRemove>
			)}
			<AppCard>
				<VStack gap='4'>
					<AppLabel variant={LabelVariant.PRIMARY}>
						{t('editable-article.labels.type')}
					</AppLabel>
					<ArticleTypeTabs
						filter={articleForm.type ?? []}
						onTabClick={handleClickType()}
						light
						editMode
					/>
				</VStack>
			</AppCard>
			{articleForm.blocks && articleForm.blocks.map(item => renderEditableBlockContent(item))}
			<OptionsDropdown options={options} direction='top left' absolute />
		</VStack>
	)
})
