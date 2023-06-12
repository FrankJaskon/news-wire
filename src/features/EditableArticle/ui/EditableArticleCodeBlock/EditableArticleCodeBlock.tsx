import { FC, memo } from 'react'
import { CodeBlockType } from '@/entities/Article'

import { ToggleFeatures } from '@/shared/lib/features'
import { EditableArticleCodeBlock as EditableArticleCodeBlockDeprecated } from './deprecated/EditableArticleCodeBlock'
import { EditableArticleCodeBlock as EditableArticleCodeBlockRedesigned } from './redesigned/EditableArticleCodeBlock'

export interface EditableArticleCodeBlockProps {
	className?: string
	block: CodeBlockType
	onChangeCode: ({ blockId, value }: { blockId: number; value: string }) => void
}

export const EditableArticleCodeBlock: FC<EditableArticleCodeBlockProps> = memo(
	(props: EditableArticleCodeBlockProps) => {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<EditableArticleCodeBlockRedesigned {...props} />}
				off={<EditableArticleCodeBlockDeprecated {...props} />}
			/>
		)
	}
)
