import { FC, ReactNode, memo, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Text, TextSize, TextVariant } from '@/shared/ui/deprecated/Text'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { useAuthorArticleList } from '../api/authorArticleListApi'

export interface AuthorArticleTextListProps {
	className?: string
	id?: number
}

export const AuthorArticleTextList: FC<AuthorArticleTextListProps> = memo(
	(props: AuthorArticleTextListProps) => {
		const { className, id } = props
		const { t } = useTranslation(['translation', 'article'])
		const {
			isLoading,
			isError,
			data: articles,
			refetch,
		} = useAuthorArticleList({
			authorId: id,
			limit: 10,
		})

		useEffect(() => {
			refetch()
		}, [refetch])

		let content: ReactNode = useMemo(() => {
			if (articles?.length) {
				return <ArticleList articles={articles} isLoading={isLoading} textOnly />
			}
			return (
				<AppText
					text={t('empty-articles-list', {
						ns: 'article',
					})}
				/>
			)
		}, [articles, isLoading, t])

		if (isError) {
			content = toggleFeatures({
				name: 'isAppRedesigned',
				on: () => <AppText text={t('error.common.some-error')} variant='error' />,
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
				<AppCard padding='24'>
					<VStack gap='24'>
						<ToggleFeatures
							feature='isAppRedesigned'
							on={
								<AppText
									title={t('author-article-title', {
										ns: 'article',
									})}
									size='xl'
									weight='bolder'
								/>
							}
							off={
								<Text
									title={t('author-article-title', {
										ns: 'article',
									})}
								/>
							}
						/>
						{content}
					</VStack>
				</AppCard>
			</VStack>
		)
	}
)
