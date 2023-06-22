import { FC, ReactNode, memo, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleList } from '@/entities/Article'
import { toggleFeatures } from '@/shared/lib/features'
import { Text, TextSize, TextVariant } from '@/shared/ui/deprecated/Text'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { useAuthorArticleList } from '../api/authorArticleListApi'

export interface AuthorArticleTextListProps {
	id?: number
}

export const AuthorArticleTextList: FC<AuthorArticleTextListProps> = memo(
	(props: AuthorArticleTextListProps) => {
		const { id } = props
		const { t } = useTranslation(['translation', 'article'])
		const {
			isLoading,
			isError,
			data: articles,
			refetch,
		} = useAuthorArticleList({
			authorId: id,
		})

		useEffect(() => {
			refetch()
		}, [refetch])

		let content: ReactNode = useMemo(() => {
			return <ArticleList articles={articles} isLoading={isLoading} limit={5} textOnly />
		}, [articles, isLoading])

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

		return <>{content}</>
	}
)
