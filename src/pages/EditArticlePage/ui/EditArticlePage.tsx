import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { TextColor } from '@/shared/const/consts'
import { Text, TextWeight } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/deprecated/VStack'
import { ArticleEditing } from '@/widgets/ArticleEditing'
import { PageWrapper } from '@/widgets/PageWrapper'

export interface EditArticlePageProps {
	className?: string
}

const EditArticlePage: FC<EditArticlePageProps> = (props: EditArticlePageProps) => {
	const { className } = props
	const { t } = useTranslation('article')
	const { id: articleId } = useParams()

	return (
		<PageWrapper data-testid='edit-article-page' className={className}>
			<VStack gap='16'>
				<Text
					title={t('editable-article.titles.edit')}
					titleHue={TextColor.SECONDARY}
					weight={TextWeight.BOLD}
				/>
				<ArticleEditing articleId={Number(articleId)} />
			</VStack>
		</PageWrapper>
	)
}

export default memo(EditArticlePage)
