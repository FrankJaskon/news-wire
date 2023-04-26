import { RatingType } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetProfileRatingProps {
	userId?: number,
	profileId?: number
}

interface RateProfileProps extends GetProfileRatingProps {
	rating: number
}

const profileRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getProfileRating: build.query<RatingType[], GetProfileRatingProps>({
			query: ({ userId, profileId }) => ({
				url: '/profile-ratings',
				params: {
					userId,
					profileId
				}
			}),
		}),
		rateProfile: build.mutation<null, RateProfileProps>({
			query: (args) => ({
				url: '/profile-ratings',
				method: 'POST',
				body: args
			}),
		}),
	}),
	overrideExisting: true,
})
export const useProfileRating = profileRatingApi.useGetProfileRatingQuery
export const useRateProfile = profileRatingApi.useRateProfileMutation
