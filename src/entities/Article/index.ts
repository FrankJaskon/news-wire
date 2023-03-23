export {
	ArticleDetails
} from './ui/ArticleDetails/ArticleDetails'

export {
	articleDetailsReducer,
	articleDetailsActions
} from './model/slice/articleDetailsSlice'

export {
	getArticleDetailsData
} from './model/selectors/articleDetailsSelectors'

export type {
	ArticleDetailsScheme,
	ArticleType,
	ArticleBlockType
} from './model/types/ArticleDetailsScheme'

export {
	ArticleList,
	ViewVariant
} from './ui/ArticleList/ArticleList'