import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CodeBlockType } from '@/entities/Article'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { AppTextArea } from '@/shared/ui/redesigned/AppTextArea'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { editableArticleActions } from '../../../model/slice/editableArticleSlice'
import {
	ArticleOptionDropdownItem,
	OptionsDropdown,
} from '../../EditableArticleOptions/OptionsDropdown/OptionsDropdown'
import { EditableBlock } from '../../EditableBlock/EditableBlock'

export interface EditableArticleCodeBlockProps {
	className?: string
	block: CodeBlockType
	onChangeCode: ({ blockId, value }: { blockId: number; value: string }) => void
}

export const EditableArticleCodeBlock: FC<EditableArticleCodeBlockProps> = memo(
	(props: EditableArticleCodeBlockProps) => {
		const { className, block, onChangeCode } = props
		const { t } = useTranslation('article')
		const dispatch = useAppDispatch()

		const handleOnChangeCode = useCallback(
			(value: string) => {
				onChangeCode({
					blockId: block.id,
					value,
				})
			},
			[block.id, onChangeCode]
		)

		const options: ArticleOptionDropdownItem[][] = useMemo(
			() => [
				[
					{
						content: t('editable-article.options.remove-code-block'),
						onClick: () => {
							dispatch(editableArticleActions.removeBlock(block.id))
						},
					},
				],
			],
			[block.id, dispatch, t]
		)

		return (
			<EditableBlock
				header={
					<HStack justify='between' align='center' innerWidth='no-shrink'>
						<AppText title={t('editable-article.blocks.code')} />
						<OptionsDropdown options={options} />
					</HStack>
				}
				className={className}
			>
				<AppTextArea
					value={block.code}
					onChange={handleOnChangeCode}
					placeholder={t('editable-article.placeholders.code')}
				/>
			</EditableBlock>
		)
	}
)
