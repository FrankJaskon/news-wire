/**
 * This component was deprecated. It is recommended to use ArticlesFilters component instead
 * @deprecated
 */

export { ArticleInfiniteList } from './ui/ArticleInfiniteList/deprecated/ArticlesInfiniteList'

export type { ArticleInfiniteListScheme } from './model/types/ArticleInfiniteListScheme'

export {
	articlesInfiniteListReducer,
	articlesInfiniteListActions,
} from './model/slice/articlesInfiniteListSlice'

export { fetchNextArticlesPage } from './model/services/fetchNextArticlesPage/fetchNextArticlesPage'

export {
	useArticleInfiniteListError,
	getArticleInfiniteListError,
} from './model/selectors/articleInfiniteListSelector'
