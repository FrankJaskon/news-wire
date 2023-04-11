import { ArticleType } from 'entities/Article'
import { rtkApi } from 'shared/api/rtkApi'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'

const recommendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendationsList: build.query<ArticleType[], number>({
			query: (limit) => ({
				url: RoutePaths.articles,
				params: {
					_limit: limit
				}
			}),
		}),
	}),
	overrideExisting: false,
})
export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery
