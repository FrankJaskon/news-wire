import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { CodeBlockType } from '@/entities/Article'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { AppTextArea } from '@/shared/ui/redesigned/AppTextArea'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { useGetEditableCodeBlockDropdownOptions } from '../../../model/helpers/hooks/useGetEditableCodeBlockDropdownOptions'
import { OptionsDropdown } from '../../EditableArticleOptions/OptionsDropdown/OptionsDropdown'
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
		const options = useGetEditableCodeBlockDropdownOptions(block.id)

		const handleOnChangeCode = useCallback(
			(value: string) => {
				onChangeCode({
					blockId: block.id,
					value,
				})
			},
			[block.id, onChangeCode]
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
