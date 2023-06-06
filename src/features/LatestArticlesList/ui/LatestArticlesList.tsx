import { FC, ReactNode, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Text, TextSize, TextVariant } from '@/shared/ui/deprecated/Text'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { useLatestArticlesList } from '../api/latestArticlesListApi'

export interface LatestArticlesListProps {
	className?: string
}

export const LatestArticlesList: FC<LatestArticlesListProps> = memo(
	(props: LatestArticlesListProps) => {
		const { className } = props

		const { t } = useTranslation(['translation', 'article'])
		const { isLoading, isError, data: articles } = useLatestArticlesList(10)

		let content: ReactNode = useMemo(
			() => (
				<ArticleList articles={articles} isLoading={isLoading} isOneLine target='_blank' />
			),
			[articles, isLoading]
		)

		if (isError) {
			content = toggleFeatures({
				name: 'isAppRedesigned',
				on: () => <AppText title={t('error.common.some-error')} variant='error' />,
				off: () => (
					<Text
						content={t('error.common.some-error')}
						size={TextSize.L}
						variant={TextVariant.ERROR}
					/>
				),
			})
		}

		return (
			<VStack className={className} gap='8' data-testid={'article-recommendations-list'}>
				<ToggleFeatures
					feature='isAppRedesigned'
					on={
						<AppText
							title={t('latest-articles-title', {
								ns: 'article',
							})}
							size='xl'
							weight='bolder'
						/>
					}
					off={
						<Text
							title={t('latest-articles-title', {
								ns: 'article',
							})}
						/>
					}
				/>
				{content}
			</VStack>
		)
	}
)
