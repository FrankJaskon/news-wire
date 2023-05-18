import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingCard } from '@/entities/Rating'
import { useUserAuthData } from '@/entities/User'
import { useArticleRating, useRateArticle } from '../api/articleRatingApi'

export interface ArticleRatingProps {
	className?: string
	articleId?: number
}

const ArticleRating: FC<ArticleRatingProps> = props => {
	const { className, articleId } = props

	const authData = useUserAuthData()
	const { t } = useTranslation('article')
	const { data, isLoading } = useArticleRating({
		userId: authData?.id,
		articleId,
	})
	const [rateArticleMutation] = useRateArticle()

	const rating = data?.[0]?.rating

	const sendFeedback = useCallback(
		(rating: number, feedback?: string) => {
			rateArticleMutation({
				userId: authData?.id,
				articleId: articleId,
				rating,
				feedback,
			})
		},
		[articleId, authData?.id, rateArticleMutation]
	)

	const onAccept = useCallback(
		(rating: number, feedback?: string) => {
			sendFeedback(rating, feedback)
		},
		[sendFeedback]
	)

	const onCancel = useCallback(
		(rating: number) => {
			sendFeedback(rating)
		},
		[sendFeedback]
	)

	if (isLoading) return null

	const title = rating
		? t('rating.rate-article-title-has-response')
		: t('rating.rate-article-title')

	return (
		<RatingCard
			className={className}
			rating={rating}
			title={title}
			feedbackTitle={t('rating.rate-article-feedback-title')}
			onAccept={onAccept}
			onCancel={onCancel}
			isLoading={isLoading}
		/>
	)
}

export default memo(ArticleRating)
