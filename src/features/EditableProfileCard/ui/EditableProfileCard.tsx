import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { EditableProfileCard as EditableProfileCardDeprecated } from './deprecated/EditableProfileCard'
import { EditableProfileCard as EditableProfileCardRedesigned } from './redesigned/EditableProfileCard'

export interface EditableProfileCardProps {
	id?: number
}

export const EditableProfileCard: FC<EditableProfileCardProps> = memo(
	(props: EditableProfileCardProps) => {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<EditableProfileCardRedesigned {...props} />}
				off={<EditableProfileCardDeprecated {...props} />}
			/>
		)
	}
)
