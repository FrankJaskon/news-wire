import { CommentType } from '@/entities/Comment'
import { rtkApi } from '@/shared/api/rtkApi'
import { getCommentsRoute } from '@/shared/const/RoutPaths'

interface GetAuthorCommentsListProps {
	authorId?: number
	limit?: number
}

const authorCommentsListApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getAuthorCommentsList: build.query<CommentType[], GetAuthorCommentsListProps>({
			query: ({ authorId, limit }) => ({
				url: getCommentsRoute(),
				params: {
					_limit: limit,
					profileId: authorId ?? '',
					_expand: 'article',
				},
			}),
		}),
	}),
	overrideExisting: false,
})
export const useAuthorArticleList = authorCommentsListApi.useGetAuthorCommentsListQuery
