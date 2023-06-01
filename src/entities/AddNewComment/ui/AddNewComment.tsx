import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { AddNewComment as AddNewCommentDeprecated } from './deprecated/AddNewComment'
import { AddNewComment as AddNewCommentRedesigned } from './redesigned/AddNewComment'

export interface AddNewCommentProps {
	className?: string
	handleSubmit: (value: string) => void
	'data-testid'?: string
}

const AddNewComment: FC<AddNewCommentProps> = props => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<AddNewCommentRedesigned {...props} />}
			off={<AddNewCommentDeprecated {...props} />}
		/>
	)
}

export default memo(AddNewComment)
