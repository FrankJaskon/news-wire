export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails'

export { articleDetailsReducer, articleDetailsActions } from './model/slice/articleDetailsSlice'

export { getArticleDetailsData } from './model/selectors/articleDetailsSelectors'

export { ViewVariant } from './model/consts/articleDetailsConsts'

export type {
	ArticleDetailsScheme,
	ArticleType,
	ArticleBlockType,
	ViewVariantType,
} from './model/types/ArticleDetailsScheme'

export { ArticleList } from './ui/ArticleList/ArticleList'
