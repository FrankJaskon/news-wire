import { FC, memo } from 'react'
import { EditableImageBlockType } from '@/entities/Article'

import { ToggleFeatures } from '@/shared/lib/features'
import { EditableArticleImageBlock as EditableArticleImageBlockDeprecated } from './deprecated/EditableArticleImageBlock'
import { EditableArticleImageBlock as EditableArticleImageBlockRedesigned } from './redesigned/EditableArticleImageBlock'

export interface EditableArticleImageBlockProps {
	className?: string
	block: EditableImageBlockType
	onChangeTitle: ({ blockId, value }: { blockId: number; value: string }) => void
	onChangeSrc: ({ blockId, value }: { blockId: number; value: string }) => void
}

export const EditableArticleImageBlock: FC<EditableArticleImageBlockProps> = memo(
	(props: EditableArticleImageBlockProps) => {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<EditableArticleImageBlockRedesigned {...props} />}
				off={<EditableArticleImageBlockDeprecated {...props} />}
			/>
		)
	}
)
