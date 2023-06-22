import { RatingType } from '@/entities/Rating'
import { rtkApi } from '@/shared/api/rtkApi'
import { getArticleRatingsRoute } from '@/shared/const/RoutPaths'

interface GetAuthorCommentsListProps {
	authorId?: number
	limit?: number
}

const authorRatingListApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getAuthorArticleRatingListApi: build.query<RatingType[], GetAuthorCommentsListProps>({
			query: ({ authorId, limit }) => ({
				url: getArticleRatingsRoute(),
				params: {
					_limit: limit,
					userId: authorId ?? '',
					_expand: 'article',
				},
			}),
		}),
	}),
	overrideExisting: false,
})
export const useAuthorArticleRatings = authorRatingListApi.useGetAuthorArticleRatingListApiQuery
