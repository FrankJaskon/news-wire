import { ArticleType } from '@/entities/Article'
import { rtkApi } from '@/shared/api/rtkApi'
import { getArticlesRoute } from '@/shared/const/RoutPaths'

const recommendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendationsList: build.query<ArticleType[], number>({
			query: (limit) => ({
				url: getArticlesRoute(),
				params: {
					_limit: limit
				}
			}),
		}),
	}),
	overrideExisting: false,
})
export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery
