import { FC, ReactNode, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import classNames from '@/shared/lib/classNames/classNames'
import { Text, TextSize, TextVariant } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi'

export interface ArticleRecommendationsListProps {
	className?: string
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo(
	(props: ArticleRecommendationsListProps) => {
		const { className } = props

		const { t } = useTranslation(['translation', 'article'])
		const { isLoading, isError, data: articles } = useArticleRecommendationsList(5)

		let content: ReactNode = useMemo(
			() => (
				<ArticleList articles={articles} isLoading={isLoading} target='_blank' isOneLine />
			),
			[articles, isLoading]
		)

		if (isError) {
			content = (
				<Text
					content={t('error.common.some-error')}
					size={TextSize.L}
					variant={TextVariant.ERROR}
				/>
			)
		}

		return (
			<div
				className={classNames('', {}, [className])}
				data-testid={'article-recommendations-list'}
			>
				<VStack gap='8'>
					<Text
						title={t('recommendations-title', {
							ns: 'article',
						})}
					/>
					{content}
				</VStack>
			</div>
		)
	}
)
