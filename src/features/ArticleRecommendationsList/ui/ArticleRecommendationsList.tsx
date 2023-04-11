import { FC, ReactNode, memo, useMemo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { VStack } from 'shared/ui/Stack'
import { ArticleList } from 'entities/Article'
import { useTranslation } from 'react-i18next'
import { Text, TextSize, TextVariant } from 'shared/ui/Text'
import { useArticleRecommendationsList } from '../api/articleRecommendationsApi'

export interface ArticleRecommendationsListProps {
	className?: string
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo(
	(props: ArticleRecommendationsListProps) => {
		const {
			className
		} = props

		const { t } = useTranslation(['translation', 'article'])
		const {
			isLoading,
			isError,
			data: articles
		} = useArticleRecommendationsList(4)

		let content: ReactNode = useMemo(() => <ArticleList
			articles={articles}
			isLoading={isLoading}
			target='_blank'
		/>, [articles, isLoading])

		if (isError) {
			content =<Text
				content={t('error.common.some-error')}
				size={TextSize.L}
				variant={TextVariant.ERROR}
			/>
		}

		return (
			<div className={classNames('', {}, [className])}>
				<VStack
					gap='gap24'
				>
					<Text title={t('recommendations-title', {
						ns: 'article'
					})} />
					{content}
				</VStack>
			</div>
		)
	})