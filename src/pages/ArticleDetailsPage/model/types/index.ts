import type {
	ArticleDetailsPageRecommendationsScheme,
} from './articleDetailsPageRecommendationsScheme'

import type {
	ArticleDetailsCommentsScheme,
} from './articleDetailsCommentsScheme'


export interface ArticleDetailsPageScheme {
	comments: ArticleDetailsCommentsScheme
	recommendations: ArticleDetailsPageRecommendationsScheme
}