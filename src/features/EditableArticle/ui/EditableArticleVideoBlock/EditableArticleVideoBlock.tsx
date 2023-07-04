import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { VideoBlockType } from '@/entities/Article'
import { AppInput } from '@/shared/ui/redesigned/AppInput'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { useGetEditableBlockDropdownOptions } from '../../model/helpers/hooks/useGetEditableBlockDropdownOptions'
import { OptionsDropdown } from '../EditableArticleOptions/OptionsDropdown/OptionsDropdown'
import { EditableBlock } from '../EditableBlock/EditableBlock'

export interface EditableArticleVideoBlockProps {
	className?: string
	block: VideoBlockType
	onChangeVideo: ({ blockId, value }: { blockId: number; value: string }) => void
}

export const EditableArticleVideoBlock: FC<EditableArticleVideoBlockProps> = memo(
	(props: EditableArticleVideoBlockProps) => {
		const { className, block, onChangeVideo } = props
		const { t } = useTranslation('article')
		const options = useGetEditableBlockDropdownOptions(block.id, 'video')

		const handleOnChangeVideo = useCallback(
			(value: string) => {
				onChangeVideo({
					blockId: block.id,
					value,
				})
			},
			[block.id, onChangeVideo]
		)

		return (
			<EditableBlock
				header={
					<HStack justify='between' align='center' innerWidth='no-shrink'>
						<AppText title={t('editable-article.blocks.video')} />
						<OptionsDropdown options={options} />
					</HStack>
				}
				className={className}
			>
				<AppInput
					value={block.src}
					onChange={handleOnChangeVideo}
					placeholder={t('editable-article.placeholders.video')}
				/>
			</EditableBlock>
		)
	}
)
