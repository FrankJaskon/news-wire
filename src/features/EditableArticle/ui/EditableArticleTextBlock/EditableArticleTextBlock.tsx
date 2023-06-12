import { FC, memo } from 'react'
import { EditableTextBlockType } from '@/entities/Article'
import { ToggleFeatures } from '@/shared/lib/features'
import { SetTextBlockParagraphProps } from '../../model/slice/editableArticleSlice'

import { EditableArticleTextBlock as EditableArticleTextBlockDeprecated } from './deprecated/EditableArticleTextBlock'
import { EditableArticleTextBlock as EditableArticleTextBlockRedesigned } from './redesigned/EditableArticleTextBlock'

export interface EditableArticleTextBlockProps {
	className?: string
	block: EditableTextBlockType
	onChangeTitle: ({ blockId, value }: { blockId: number; value: string }) => void
	onChangeParagraph: (props: SetTextBlockParagraphProps) => void
	onRemoveParagraph: (props: SetTextBlockParagraphProps) => void
}

export const EditableArticleTextBlock: FC<EditableArticleTextBlockProps> = memo(
	(props: EditableArticleTextBlockProps) => {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<EditableArticleTextBlockRedesigned {...props} />}
				off={<EditableArticleTextBlockDeprecated {...props} />}
			/>
		)
	}
)
