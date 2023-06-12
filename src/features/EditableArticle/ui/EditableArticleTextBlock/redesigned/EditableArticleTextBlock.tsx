import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { EditableTextBlockType } from '@/entities/Article'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { randomInteger } from '@/shared/lib/randomInteger/randomInteger'
import { AppInput } from '@/shared/ui/redesigned/AppInput'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { AppTextArea } from '@/shared/ui/redesigned/AppTextArea'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'
import {
	SetTextBlockParagraphProps,
	editableArticleActions,
} from '../../../model/slice/editableArticleSlice'
import {
	ArticleOptionDropdownItem,
	OptionsDropdown,
} from '../../EditableArticleOptions/OptionsDropdown/OptionsDropdown'
import { EditableArticleWithRemove } from '../../EditableArticleWithRemove/EditableArticleWithRemove'
import { EditableBlock } from '../../EditableBlock/EditableBlock'
import cls from './EditableArticleTextBlock.module.scss'

export interface EditableArticleTextBlockProps {
	className?: string
	block: EditableTextBlockType
	onChangeTitle: ({ blockId, value }: { blockId: number; value: string }) => void
	onChangeParagraph: (props: SetTextBlockParagraphProps) => void
	onRemoveParagraph: (props: SetTextBlockParagraphProps) => void
}

export const EditableArticleTextBlock: FC<EditableArticleTextBlockProps> = memo(
	(props: EditableArticleTextBlockProps) => {
		const { className, block, onChangeTitle, onChangeParagraph, onRemoveParagraph } = props
		const { t } = useTranslation('article')
		const dispatch = useAppDispatch()
		const isTitle = useMemo(
			() => block.hasTitle || Boolean(block.title),
			[block.hasTitle, block.title]
		)

		const handleOnChangeParagraph = useCallback(
			(paragraphId: number) => (value: string) => {
				onChangeParagraph({
					blockId: block.id,
					value,
					paragraphId,
				})
			},
			[block.id, onChangeParagraph]
		)

		const handleOnRemoveParagraph = useCallback(
			(paragraphId: number) => () => {
				onRemoveParagraph({
					blockId: block.id,
					paragraphId,
				})
			},
			[block.id, onRemoveParagraph]
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

		const handleRemoveTitle = useCallback(() => {
			dispatch(
				editableArticleActions.setTextBlock({
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
						content: t('editable-article.options.add-text-title'),
						onClick: () => {
							dispatch(
								editableArticleActions.setTextBlock({
									id: block.id,
									hasTitle: true,
									title: '',
								})
							)
						},
						disabled: isTitle,
					},
					{
						content: t('editable-article.options.add-text-paragraph'),
						onClick: () => {
							dispatch(
								editableArticleActions.setTextBlockParagraph({
									blockId: block.id,
									paragraphId: randomInteger(),
									value: '',
								})
							)
						},
					},
				],
				[
					{
						content: t('editable-article.options.remove-text-title'),
						onClick: () => {
							dispatch(
								editableArticleActions.setTextBlock({
									id: block.id,
									hasTitle: false,
									title: '',
								})
							)
						},
						disabled: !isTitle,
					},
					{
						content: t('editable-article.options.remove-text-block'),
						onClick: () => {
							dispatch(editableArticleActions.removeBlock(block.id))
						},
					},
				],
			],
			[block.id, dispatch, isTitle, t]
		)

		return (
			<EditableBlock
				header={
					<HStack justify='between' align='center' innerWidth='no-shrink'>
						<AppText title={t('editable-article.blocks.text')} />
						<OptionsDropdown options={options} />
					</HStack>
				}
			>
				<VStack gap='16'>
					{isTitle && (
						<EditableArticleWithRemove onRemove={handleRemoveTitle}>
							<AppInput
								variant='custom'
								value={block.title}
								onChange={handleOnChangeTitle}
								placeholder={t('editable-article.placeholders.title')}
							/>
						</EditableArticleWithRemove>
					)}
					{block.paragraphs &&
						block.paragraphs.map(paragraph => {
							return (
								<EditableArticleWithRemove
									onRemove={handleOnRemoveParagraph(paragraph.id)}
									key={paragraph.id}
								>
									<AppTextArea
										placeholder={t(
											'editable-article.placeholders.text-block-paragraph'
										)}
										className={cls.paragraph}
										value={paragraph.value}
										onChange={handleOnChangeParagraph(paragraph.id)}
									/>
								</EditableArticleWithRemove>
							)
						})}
				</VStack>
			</EditableBlock>
		)
	}
)
