import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { getEditArticleDetailsRoute } from '@/shared/const/RoutPaths'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'

export interface ArticleDetailsAdditionalInfoProps {
	className?: string
	articleId?: number
	views?: number
	createdAd?: string
	avatar?: string
	username?: string
	ifCanEdit?: boolean
}

export const ArticleDetailsAdditionalInfo: FC<ArticleDetailsAdditionalInfoProps> = memo(
	(props: ArticleDetailsAdditionalInfoProps) => {
		const { className, articleId, views, createdAd, avatar, username, ifCanEdit } = props
		const { t } = useTranslation('article')

		if (!articleId) {
			return null
		}

		return (
			<AppCard className={className} padding='24' radius='big'>
				<VStack gap='16'>
					<HStack gap='8' align='center'>
						<Avatar size={32} src={avatar} />
						<AppText text={username} weight='bold' />
						<AppText text={createdAd} />
					</HStack>
					{ifCanEdit && (
						<AppLink to={getEditArticleDetailsRoute(articleId)}>
							<AppButton variant='filled'>{t('edit-article-btn')}</AppButton>
						</AppLink>
					)}
					<AppText text={views + ''} />
				</VStack>
			</AppCard>
		)
	}
)
