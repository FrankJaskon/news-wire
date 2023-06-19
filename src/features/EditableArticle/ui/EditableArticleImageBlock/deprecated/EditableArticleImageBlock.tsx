import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { EditableImageBlockType } from '@/entities/Article'
import { TextColor } from '@/shared/const/consts'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { AppInput } from '@/shared/ui/deprecated/AppInput'
import { AppLabel, LabelVariant } from '@/shared/ui/deprecated/Label'
import { Text } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { editableArticleActions } from '../../../model/slice/editableArticleSlice'
import {
	ArticleOptionDropdownItem,
	OptionsDropdown,
} from '../../EditableArticleOptions/OptionsDropdown/OptionsDropdown'
import { EditableBlock } from '../../EditableBlock/EditableBlock'

export interface EditableArticleImageBlockProps {
	className?: string
	block: EditableImageBlockType
	onChangeTitle: ({ blockId, value }: { blockId: number; value: string }) => void
	onChangeSrc: ({ blockId, value }: { blockId: number; value: string }) => void
}

export const EditableArticleImageBlock: FC<EditableArticleImageBlockProps> = memo(
	(props: EditableArticleImageBlockProps) => {
		const { className, block, onChangeTitle, onChangeSrc } = props
		const { t } = useTranslation('article')
		const dispatch = useAppDispatch()
		const isTitle = useMemo(
			() => block.hasTitle || Boolean(block.title),
			[block.hasTitle, block.title]
		)

		const handleOnChangeTitle = useCallback(
			(value: string) => {
				onChangeTitle({
					blockId: block.id,
					value,
				})
			},
			[block.id, onChangeTitle]
		)

		const handleOnChangeSrc = useCallback(
			(value: string) => {
				onChangeSrc({
					blockId: block.id,
					value,
				})
			},
			[block.id, onChangeSrc]
		)

		const options: ArticleOptionDropdownItem[][] = useMemo(
			() => [
				[
					{
						component: t('editable-article.options.add-img-title'),
						onClick: () => {
							dispatch(
								editableArticleActions.setImageBlock({
									id: block.id,
									hasTitle: true,
									title: '',
								})
							)
						},
						disabled: isTitle,
					},
				].filter(Boolean),
				[
					{
						component: t('editable-article.options.remove-img-title'),
						onClick: () => {
							dispatch(
								editableArticleActions.setImageBlock({
									id: block.id,
									hasTitle: false,
									title: '',
								})
							)
						},
						disabled: !isTitle,
					},
					{
						component: t('editable-article.options.remove-img-block'),
						onClick: () => {
							dispatch(editableArticleActions.removeBlock(block.id))
						},
					},
				].filter(Boolean),
			],
			[block.id, dispatch, isTitle, t]
		)

		return (
			<EditableBlock
				header={
					<HStack justify='between' align='center' innerWidth='no-shrink'>
						<Text title={t('editable-article.blocks.img')} titleHue={TextColor.LIGHT} />
						<OptionsDropdown options={options} />
					</HStack>
				}
			>
				<VStack className={classNames('', {}, [className])} gap='12'>
					{isTitle && (
						<AppLabel
							variant={LabelVariant.PRIMARY}
							htmlFor={`editable-block-title-${block.id}`}
						>
							{t('editable-article.labels.image-block-title')}
						</AppLabel>
					)}
					{isTitle && (
						<AppInput
							value={block.title}
							onChange={handleOnChangeTitle}
							placeholder={t('editable-article.placeholders.title')}
						/>
					)}
					<AppInput
						value={block.src}
						onChange={handleOnChangeSrc}
						placeholder={t('editable-article.placeholders.img')}
					/>
				</VStack>
			</EditableBlock>
		)
	}
)
