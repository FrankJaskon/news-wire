import { ArticleType } from '@/entities/Article'
import { SortVariant } from '@/entities/SortSelector'
import { rtkApi } from '@/shared/api/rtkApi'
import { getArticlesRoute } from '@/shared/const/RoutPaths'
import { SortOrder } from '@/shared/types/types'

const latestArticleListsApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getLatestArticlesList: build.query<ArticleType[], number>({
			query: (limit: number) => ({
				url: getArticlesRoute(),
				params: {
					_expand: 'profile',
					_limit: limit,
					_sort: SortVariant.DATE,
					_order: SortOrder.UP_DOWN,
				},
			}),
		}),
	}),
	overrideExisting: false,
})
export const useLatestArticlesList = latestArticleListsApi.useGetLatestArticlesListQuery
