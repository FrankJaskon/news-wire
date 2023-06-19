import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { EditableArticleBlockType } from '@/entities/Article'
import { ArticleCategoriesType } from '@/entities/ArticleCategory'
import { ArticleTypeTabs } from '@/entities/ArticleTypeTabs'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'

import { AppInput } from '@/shared/ui/redesigned/AppInput'
import { AppLabel } from '@/shared/ui/redesigned/AppLabel'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { useEditableArticleForm } from '../../../model/selectors/editableArticleSelector'
import {
	SetTextBlockParagraphProps,
	editableArticleActions,
} from '../../../model/slice/editableArticleSlice'
import { EditableArticleType } from '../../../model/types/editableArticleScheme'
import { EditableArticleCodeBlock } from '../../EditableArticleCodeBlock/EditableArticleCodeBlock'
import { EditableArticleImageBlock } from '../../EditableArticleImageBlock/EditableArticleImageBlock'

import { EditableArticleTextBlock } from '../../EditableArticleTextBlock/EditableArticleTextBlock'
import { EditableArticleWithRemove } from '../../EditableArticleWithRemove/EditableArticleWithRemove'
import cls from './EditableArticle.module.scss'

export interface EditableArticleProps {
	className?: string
}

export const EditableArticle: FC<EditableArticleProps> = memo((props: EditableArticleProps) => {
	const { className } = props
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

	return (
		<VStack gap='24' className={className}>
			<VStack gap='8'>
				<AppLabel variant='primary' htmlFor='article-title'>
					{t('editable-article.labels.title')}
					<span className={cls.red}>*</span>
				</AppLabel>
				<AppInput
					id='article-title'
					value={articleForm?.title ?? ''}
					onChange={handleOnChangeTitle}
					placeholder={t('editable-article.placeholders.title')}
				/>
			</VStack>
			{isSubtitle && (
				<VStack gap='8'>
					<AppLabel variant='primary' htmlFor='article-subtitle'>
						{t('editable-article.labels.subtitle')}
					</AppLabel>
					<EditableArticleWithRemove onRemove={handleOnRemoveSubtitle}>
						<AppInput
							id='article-subtitle'
							value={articleForm?.subtitle ?? ''}
							onChange={handleOnChangeSubtitle}
							placeholder={t('editable-article.placeholders.subtitle')}
						/>
					</EditableArticleWithRemove>
				</VStack>
			)}
			{isImg && (
				<VStack gap='8'>
					<AppLabel variant='primary' htmlFor='article-img'>
						{t('editable-article.labels.img')}
					</AppLabel>
					<EditableArticleWithRemove onRemove={handleOnRemoveImg}>
						<AppInput
							id='article-img'
							value={articleForm?.img ?? ''}
							onChange={handleOnChangeImg}
							placeholder={t('editable-article.placeholders.img')}
						/>
					</EditableArticleWithRemove>
				</VStack>
			)}
			<VStack gap='8'>
				<AppLabel variant='primary'>{t('editable-article.labels.type')}</AppLabel>
				<ArticleTypeTabs
					filter={articleForm.type ?? []}
					onTabClick={handleClickType()}
					editMode
				/>
			</VStack>
			{articleForm.blocks && articleForm.blocks.map(item => renderEditableBlockContent(item))}
		</VStack>
	)
})
