import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { TextColor } from '@/shared/const/consts'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextWeight } from '@/shared/ui/Text'
import { ArticleEditing } from '@/widgets/ArticleEditing'
import { PageWrapper } from '@/widgets/PageWrapper'

export interface CreateArticlePageProps {
	className?: string
}

const CreateArticlePage: FC<CreateArticlePageProps> = (props: CreateArticlePageProps) => {
	const { className } = props
	const { t } = useTranslation('article')

	return (
		<PageWrapper data-testid='edit-article-page' className={className}>
			<VStack gap='16'>
				<Text
					title={t('editable-article.titles.create')}
					titleHue={TextColor.SECONDARY}
					weight={TextWeight.BOLD}
				/>
				<ArticleEditing />
			</VStack>
		</PageWrapper>
	)
}

export default memo(CreateArticlePage)
