import { FC, memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useUserAuthData } from '@/entities/User'
import { AuthorArticleTextList } from '@/features/AuthorArticleTextList'
import { AuthorCommentsList } from '@/features/AuthorCommentsList'
import { AuthorRatingList } from '@/features/AuthorRatingList'
import { useEditableProfileCardProfileData } from '@/features/EditableProfileCard/model/selectors/getEditableProfileCardProfileData/getEditableProfileCardProfileData'
import { TabContent } from '@/shared/ui/redesigned/TabContent/TabContent'
import { VStack } from '@/shared/ui/redesigned/VStack'

export interface UserActivityProps {
	className?: string
	id: number
}

export const UserActivity: FC<UserActivityProps> = memo((props: UserActivityProps) => {
	const { className, id } = props
	const { t } = useTranslation()
	const authData = useUserAuthData()
	const profileData = useEditableProfileCardProfileData()
	const canEdit: boolean = useMemo(
		() => Number(authData?.id) === Number(profileData?.id),
		[authData?.id, profileData?.id]
	)

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
					visible: true,
				},
				{
					content: (
						<VStack gap='24'>
							<AuthorCommentsList id={id} />
						</VStack>
					),
					title: t('author-comments-title'),
					visible: canEdit,
				},
				{
					content: (
						<VStack gap='24'>
							<AuthorRatingList id={id} />
						</VStack>
					),
					title: t('author-ratings-title'),
					visible: canEdit,
				},
			]}
		/>
	)
})
