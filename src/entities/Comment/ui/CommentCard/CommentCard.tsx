import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { CommentType } from '../../model/types/comment'
import { CommentCard as CommentCardDeprecated } from './deprecated/CommentCard'
import { CommentCard as CommentCardRedesigned } from './redesigned/CommentCard'

export interface CommentCardProps {
	className?: string
	comment?: CommentType
	isLoading?: boolean
	'data-testid'?: string
	variant?: 'user' | 'article'
	highlighted?: boolean
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<CommentCardRedesigned {...props} />}
			off={<CommentCardDeprecated {...props} />}
		/>
	)
})
