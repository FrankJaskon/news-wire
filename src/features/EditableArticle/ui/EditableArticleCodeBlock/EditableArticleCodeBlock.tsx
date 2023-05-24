import { FC, memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { CodeBlockType } from '@/entities/Article'
import { TextColor } from '@/shared/const/consts'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { AppTextArea } from '@/shared/ui/deprecated/AppTextArea'
import { HStack } from '@/shared/ui/deprecated/HStack'
import { Text } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/deprecated/VStack'
import { editableArticleActions } from '../../model/slice/editableArticleSlice'
import {
	ArticleOptionDropdownItem,
	OptionsDropdown,
} from '../EditableArticleOptions/OptionsDropdown/OptionsDropdown'
import { EditableBlock } from '../EditableBlock/EditableBlock'

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
						component: t('editable-article.options.remove-code-block'),
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
						<Text
							title={t('editable-article.blocks.code')}
							titleHue={TextColor.LIGHT}
						/>
						<OptionsDropdown options={options} />
					</HStack>
				}
			>
				<VStack className={classNames('', {}, [className])} gap='12'>
					<AppTextArea
						variant='contrast'
						value={block.code}
						onChange={handleOnChangeCode}
						placeholder={t('editable-article.placeholders.code')}
					/>
				</VStack>
			</EditableBlock>
		)
	}
)
