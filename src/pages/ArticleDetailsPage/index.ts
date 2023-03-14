export {
	LazyArticleDetailsPage as ArticleDetailsPage
} from './ui/ArticleDetailsPage/ArticleDetailsPage.lazy'

export {
	articleDetailsReducer,
	articleDetailsActions
} from './model/slice/articleDetailsSlice'

export type {
	ArticleDetailsScheme,
	ArticleType,
	ArticleBlockType
} from './model/types/ArticleDetailsScheme'