import { FC, ReactNode, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi'

export interface ArticleRecommendationsListProps {
	className?: string
}

export const articlesNumber = 5

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo(
	(props: ArticleRecommendationsListProps) => {
		const { className } = props

		const { t } = useTranslation(['translation', 'article'])
		const { isLoading, isError, data: articles } = useArticleRecommendationsList(articlesNumber)

		let content: ReactNode = useMemo(
			() => (
				<ArticleList articles={articles} isLoading={isLoading} isOneLine target='_blank' />
			),
			[articles, isLoading]
		)

		if (isError) {
			content = <AppText text={t('error.common.some-error')} variant='error' />
		}

		return (
			<VStack gap='16' className={className} data-testid={'article-recommendations-list'}>
				<AppText
					title={t('recommendations-title', {
						ns: 'article',
					})}
					size='xl'
					weight='bolder'
				/>
				{content}
			</VStack>
		)
	}
)
