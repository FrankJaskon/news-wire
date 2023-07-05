import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useUserAuthData } from '@/entities/User'
import { ArticleComments } from '@/features/ArticleComments'
import {
	ArticleDetails,
	useArticleDetailsData,
	useArticleDetailsError,
	useArticleDetailsIsLoading,
} from '@/features/ArticleDetails'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import classNames from '@/shared/lib/classNames/classNames'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { PageWrapper } from '@/widgets/PageWrapper'
import { ArticleDetailsAdditionalInfoContainer } from '../../ArticleDetailsAdditionalInfoContainer/ArticleDetailsAdditionalInfoContainer'
import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsPageProps {
	className?: string
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = memo(
	(props: ArticleDetailsPageProps) => {
		const { className } = props
		const error = useArticleDetailsError()
		const isLoading = useArticleDetailsIsLoading()
		const { t } = useTranslation('article')
		const id = Number(useParams().id)
		const userId = useUserAuthData()?.id
		const articleAuthorId = useArticleDetailsData().profile?.id
		const isAuthor = userId && articleAuthorId && articleAuthorId === userId

		if (!id && __PROJECT__ !== 'storybook') {
			return (
				<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
					<AppText variant='error' text={t('details.error.article-not-found')} />
				</div>
			)
		}

		return (
			<PageWrapper
				className={classNames(cls.ArticleDetailsPage, {}, [className])}
				data-testid='article-details-page'
			>
				<StickyContentLayout
					content={
						<AppCard padding='24' radius='big'>
							<VStack gap='24'>
								<ArticleDetails id={id} />
								{!error && !isLoading && !isAuthor && userId && (
									<ArticleRating articleId={id} />
								)}
								{!error && !isLoading && <ArticleRecommendationsList />}
								{!error && !isLoading && <ArticleComments />}
							</VStack>
						</AppCard>
					}
					right={<ArticleDetailsAdditionalInfoContainer />}
				/>
			</PageWrapper>
		)
	}
)
