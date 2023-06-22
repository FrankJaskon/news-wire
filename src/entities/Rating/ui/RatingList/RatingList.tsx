import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { getArticleDetailsRoute } from '@/shared/const/RoutPaths'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { LinkAvatarListItem } from '@/shared/ui/redesigned/LinkAvatarListItem/LinkAvatarListItem'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { RatingType } from '../../model/types/types'
import { RatingCard } from '../RatingCard/RatingCard'

export interface RatingListProps {
	ratings?: RatingType[]
	isLoading?: boolean
	error?: string
}

export const RatingList: FC<RatingListProps> = memo((props: RatingListProps) => {
	const { ratings, isLoading, error } = props

	const { t } = useTranslation()

	if (error) {
		return <AppText variant='error' text={t('error')} />
	}

	if (isLoading) {
		return (
			<VStack gap='16'>
				<Skeleton height={32} />
				<Skeleton height={32} />
				<Skeleton height={32} />
			</VStack>
		)
	}

	return (
		<>
			{ratings?.length ? (
				ratings?.map(rating => (
					<LinkAvatarListItem
						key={rating.id}
						to={getArticleDetailsRoute(rating!.article!.id!)}
						avatar={rating?.article?.img}
						content={
							<VStack gap='8' align='start'>
								<AppText title={rating?.article?.title} weight='bold' />
								<RatingCard rating={rating?.rating} variant='small' />
							</VStack>
						}
					/>
				))
			) : (
				<AppText text={t('empty-ratings-list')} />
			)}
		</>
	)
})
