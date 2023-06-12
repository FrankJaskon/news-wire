import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { EditableArticle as EditableArticleDeprecated } from './deprecated/EditableArticle'
import { EditableArticle as EditableArticleRedesigned } from './redesigned/EditableArticle'

export interface EditableArticleProps {
	className?: string
	editMode?: boolean
}

export const EditableArticle: FC<EditableArticleProps> = memo((props: EditableArticleProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<EditableArticleRedesigned {...props} />}
			off={<EditableArticleDeprecated {...props} />}
		/>
	)
})
