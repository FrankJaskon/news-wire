import { ArticleType } from '@/entities/Article'
import { SortVariant } from '@/entities/SortSelector'
import { rtkApi } from '@/shared/api/rtkApi'
import { getArticlesRoute } from '@/shared/const/RoutPaths'
import { SortOrder } from '@/shared/types/types'

interface GetAuthorArticleListProps {
	authorId?: number
	limit?: number
}

const authorArticleListApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getAuthorArticleList: build.query<ArticleType[], GetAuthorArticleListProps>({
			query: ({ authorId, limit }) => ({
				url: getArticlesRoute(),
				params: {
					_limit: limit,
					_sort: SortVariant.DATE,
					_order: SortOrder.UP_DOWN,
					profileId: authorId ?? '',
				},
			}),
		}),
	}),
	overrideExisting: false,
})
export const useAuthorArticleList = authorArticleListApi.useGetAuthorArticleListQuery
