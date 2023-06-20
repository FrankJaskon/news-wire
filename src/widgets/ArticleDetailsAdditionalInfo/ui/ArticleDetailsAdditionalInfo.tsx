import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ClickableAvatar } from '@/entities/ClickableAvatar'
import { ProfileType } from '@/entities/Profile'
import { getEditArticleDetailsRoute } from '@/shared/const/RoutPaths'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'

export interface ArticleDetailsAdditionalInfoProps {
	className?: string
	articleId?: number
	views?: string | number
	createdAt?: string
	profile?: ProfileType
	ifCanEdit?: boolean
	isLoading?: boolean
}

export const ArticleDetailsAdditionalInfo: FC<ArticleDetailsAdditionalInfoProps> = memo(
	(props: ArticleDetailsAdditionalInfoProps) => {
		const { className, articleId, views, createdAt, profile, ifCanEdit, isLoading } = props
		const { t } = useTranslation('article')

		if (!articleId) {
			return null
		}

		if (isLoading) {
			return (
				<AppCard className={className} padding='24' radius='big'>
					<VStack gap='16'>
						<HStack gap='8' align='center'>
							<Skeleton width={32} height={32} border='50%' />
							<Skeleton width={'40%'} height={24} />
						</HStack>
						<Skeleton width={'80%'} height={24} />
						<HStack gap='8' align='center' justify='between'>
							<Skeleton width={'30%'} height={20} />
							<Skeleton width={'50%'} height={20} />
						</HStack>
					</VStack>
				</AppCard>
			)
		}

		return (
			<AppCard className={className} padding='24' radius='big'>
				<VStack gap='16'>
					<ClickableAvatar
						id={profile!.id!}
						avatar={profile?.avatar}
						username={profile?.username}
					/>
					{ifCanEdit && (
						<AppLink to={getEditArticleDetailsRoute(articleId)}>
							<AppButton variant='filled'>{t('edit-article-btn')}</AppButton>
						</AppLink>
					)}
					<HStack gap='8' align='center' justify='between'>
						<AppText
							text={t('editable-article.views', { count: Number(views) ?? 0 })}
						/>
						<AppText text={createdAt} />
					</HStack>
				</VStack>
			</AppCard>
		)
	}
)
