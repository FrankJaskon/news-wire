import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { EditableImageBlockType } from '@/entities/Article/model/types/Article'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { AppInput } from '@/shared/ui/redesigned/AppInput'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { editableArticleActions } from '../../../model/slice/editableArticleSlice'
import {
	ArticleOptionDropdownItem,
	OptionsDropdown,
} from '../../EditableArticleOptions/OptionsDropdown/OptionsDropdown'
import { EditableArticleWithRemove } from '../../EditableArticleWithRemove/EditableArticleWithRemove'
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

		const hadleOnRemoveTitle = useCallback(() => {
			dispatch(
				editableArticleActions.setImageBlock({
					id: block.id,
					hasTitle: false,
					title: '',
				})
			)
		}, [block.id, dispatch])

		const options: ArticleOptionDropdownItem[][] = useMemo(
			() => [
				[
					{
						content: t('editable-article.options.add-img-title'),
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
						content: t('editable-article.options.remove-img-title'),
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
						content: t('editable-article.options.remove-img-block'),
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
						<AppText title={t('editable-article.blocks.img')} />
						<OptionsDropdown options={options} />
					</HStack>
				}
			>
				<VStack className={classNames('', {}, [className])} gap='16'>
					{isTitle && (
						<EditableArticleWithRemove onRemove={hadleOnRemoveTitle}>
							<AppInput
								value={block.title}
								variant='custom'
								onChange={handleOnChangeTitle}
								placeholder={t('editable-article.placeholders.title')}
							/>
						</EditableArticleWithRemove>
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
