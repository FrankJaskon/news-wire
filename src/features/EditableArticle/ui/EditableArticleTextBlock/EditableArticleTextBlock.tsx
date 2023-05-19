import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { EditableTextBlockType } from '@/entities/Article'
import { TextColor } from '@/shared/const/consts'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { randomInteger } from '@/shared/lib/randomInteger/randomInteger'
import { AppInput } from '@/shared/ui/Form/AppInput'
import { AppTextArea } from '@/shared/ui/Form/AppTextArea'
import { AppLabel, LabelVariant } from '@/shared/ui/Form/Label'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import {
	SetTextBlockParagraphProps,
	editableArticleActions,
} from '../../model/slice/editableArticleSlice'
import {
	ArticleOptionDropdownItem,
	OptionsDropdown,
} from '../EditableArticleOptions/OptionsDropdown/OptionsDropdown'
import { EditableArticleWithRemove } from '../EditableArticleWithRemove/EditableArticleWithRemove'
import { EditableBlock } from '../EditableBlock/EditableBlock'
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

		const options: ArticleOptionDropdownItem[][] = useMemo(
			() => [
				[
					{
						component: t('editable-article.options.add-text-title'),
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
						component: t('editable-article.options.add-text-paragraph'),
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
						component: t('editable-article.options.remove-text-title'),
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
						component: t('editable-article.options.remove-text-block'),
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
						<Text
							title={t('editable-article.blocks.text')}
							titleHue={TextColor.LIGHT}
						/>
						<OptionsDropdown options={options} />
					</HStack>
				}
			>
				<VStack gap='8'>
					{isTitle && (
						<AppLabel
							variant={LabelVariant.PRIMARY}
							htmlFor={`editable-block-title-${block.id}`}
						>
							{t('editable-article.labels.text-block-title')}
						</AppLabel>
					)}
					{isTitle && (
						<AppInput
							value={block.title}
							onChange={handleOnChangeTitle}
							placeholder={t('editable-article.placeholders.title')}
						/>
					)}
					{block.paragraphs &&
						block.paragraphs.map(paragraph => {
							return (
								<EditableArticleWithRemove
									onRemove={handleOnRemoveParagraph(paragraph.id)}
									key={paragraph.id}
								>
									<AppTextArea
										variant='contrast'
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
