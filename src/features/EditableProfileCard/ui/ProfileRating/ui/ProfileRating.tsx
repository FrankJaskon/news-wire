import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { useProfileRating, useRateProfile } from '../api/profileRatingApi'

export interface ProfileRatingProps {
	className?: string
	profileId?: number
}

const ProfileRating: FC<ProfileRatingProps> = props => {
	const { className, profileId } = props

	const authData = useSelector(getUserAuthData)
	const { t } = useTranslation('profile')
	const { data, isLoading } = useProfileRating({
		userId: authData?.id,
		profileId,
	})
	const [rateProfileMutation] = useRateProfile()

	const rating = data?.[0]?.rating

	const sendFeedback = useCallback(
		(rating: number) => {
			rateProfileMutation({
				userId: authData?.id,
				profileId,
				rating,
			})
		},
		[authData?.id, profileId, rateProfileMutation]
	)

	const onAccept = useCallback(
		(rating: number) => {
			sendFeedback(rating)
		},
		[sendFeedback]
	)

	if (isLoading) return null

	const title = rating
		? t('rating.rate-profile-title-has-response')
		: t('rating.rate-profile-title')

	return (
		<RatingCard
			className={className}
			rating={rating}
			title={title}
			onAccept={onAccept}
			isLoading={isLoading}
		/>
	)
}

export default memo(ProfileRating)
