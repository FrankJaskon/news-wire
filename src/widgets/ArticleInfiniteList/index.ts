export { ArticleInfiniteList } from './ui/ArticleInfiniteList/ArticlesInfiniteList'

export type { ArticleInfiniteListScheme } from './model/types/ArticleInfiniteListScheme'

export {
	articlesInfiniteListReducer,
	articlesInfiniteListActions,
} from './model/slice/articlesInfiniteListSlice'

export { fetchNextArticlesPage } from './model/services/fetchNextArticlesPage/fetchNextArticlesPage'

export { getError } from './model/selectors/articlesPageSelector'
