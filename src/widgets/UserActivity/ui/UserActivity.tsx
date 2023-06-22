import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AuthorArticleTextList } from '@/features/AuthorArticleTextList'
import { AuthorCommentsList } from '@/features/AuthorCommentsList'
import { AuthorRatingList } from '@/features/AuthorRatingList'
import { TabContent } from '@/shared/ui/redesigned/TabContent/TabContent'
import { VStack } from '@/shared/ui/redesigned/VStack'

export interface UserActivityProps {
	className?: string
	id: number
}

export const UserActivity: FC<UserActivityProps> = memo((props: UserActivityProps) => {
	const { className, id } = props
	const { t } = useTranslation('article')

	return (
		<TabContent
			className={className}
			items={[
				{
					content: (
						<VStack gap='24'>
							<AuthorArticleTextList id={id} />
						</VStack>
					),
					title: t('author-article-title'),
				},
				{
					content: (
						<VStack gap='24'>
							<AuthorCommentsList id={id} />
						</VStack>
					),
					title: t('author-comments-title'),
				},
				{
					content: (
						<VStack gap='24'>
							<AuthorRatingList id={id} />
						</VStack>
					),
					title: t('author-ratings-title'),
				},
			]}
		/>
	)
})
