import { Suspense, lazy } from 'react'
import { ProfileRatingProps } from './ProfileRating'

const ProfileRatingAsync = lazy(() => import('./ProfileRating'))

export const ProfileRatingLazy = (props: ProfileRatingProps) => {
	return (
		<Suspense fallback='...'>
			<ProfileRatingAsync {...props} />
		</Suspense>
	)
}
