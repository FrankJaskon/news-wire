import { Suspense, lazy } from 'react'
import { ArticleRatingProps } from './ArticleRating'

const ArticleRatingAsync = lazy(() => import('./ArticleRating'))

export const ArticleRatingLazy = (props: ArticleRatingProps) => {
	return (
		<Suspense fallback='...'>
			<ArticleRatingAsync {...props} />
		</Suspense>
	)
}
