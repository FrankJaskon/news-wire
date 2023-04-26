import { RatingType } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'

interface GetArticleRatingProps {
	userId?: number,
	articleId?: number
}

interface RateArticleProps extends GetArticleRatingProps {
	rating: number
	feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRating: build.query<RatingType[], GetArticleRatingProps>({
			query: ({ userId, articleId }) => ({
				url: '/article-ratings',
				params: {
					userId,
					articleId
				}
			}),
		}),
		rateArticle: build.mutation<null, RateArticleProps>({
			query: (args) => ({
				url: '/article-ratings',
				method: 'POST',
				body: args
			}),
		}),
	}),
	overrideExisting: true,
})
export const useArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
