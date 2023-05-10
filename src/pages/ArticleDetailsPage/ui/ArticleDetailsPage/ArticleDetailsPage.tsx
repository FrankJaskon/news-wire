import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from '@/entities/Article'
import { ArticleComments } from '@/features/ArticleComments'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import classNames from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { PageWrapper } from '@/widgets/PageWrapper'
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import cls from './ArticleDetailsPage.module.scss'

export interface ArticleDetailsPageProps {
	className ?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
	const {
		className
	} = props

	const { t } = useTranslation('article')
	const id = Number(useParams().id)

	if (!id && __PROJECT__ !== 'storybook') {
		<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
			<Text variant='error' content={t('details.error.article-not-found')} />
		</div>
	}

	return <PageWrapper
		className={classNames(cls.ArticleDetailsPage, {}, [className])}
		data-testid='article-details-page'
	>
		<VStack
			gap='24'
		>
			<ArticleDetailsPageHeader
				articleId={id}
			/>
			<ArticleDetails id={id} />
			<ArticleRating
				articleId={id}
			/>
			<ArticleRecommendationsList />
			<ArticleComments />
		</VStack>
	</PageWrapper>
}

export default memo(ArticleDetailsPage)