import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { RatingVariantDeprecatedType } from '../../consts/consts'
import { RatingCard as RatingCardDeprecated } from './deprecated/RatingCard'
import { RatingCard as RatingCardRedesigned } from './redesigned/RatingCard'

export interface RatingCardProps {
	className?: string
	title?: string
	feedbackTitle?: string
	onAccept?: (rating: number, feedback?: string) => void
	onCancel?: (rating: number) => void
	rating?: number
	isLoading?: boolean
	variant?: RatingVariantDeprecatedType
}

/**
 *This component uses deprecated components. It should be fixed
 */

export const RatingCard: FC<RatingCardProps> = memo((props: RatingCardProps) => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<RatingCardRedesigned {...props} />}
			off={<RatingCardDeprecated {...props} />}
		/>
	)
})
