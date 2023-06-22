import { FC, ReactNode, memo, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { RatingList } from '@/entities/Rating/ui/RatingList/RatingList'
import { toggleFeatures } from '@/shared/lib/features'
import { Text, TextSize, TextVariant } from '@/shared/ui/deprecated/Text'
import { AppText } from '@/shared/ui/redesigned/AppText'
import { useAuthorArticleRatings } from '../api/authorRatingListApi'

export interface AuthorRatingListProps {
	id?: number
}

export const AuthorRatingList: FC<AuthorRatingListProps> = memo((props: AuthorRatingListProps) => {
	const { id } = props
	const { t } = useTranslation()
	const {
		isLoading,
		isError,
		data: ratings,
		refetch,
	} = useAuthorArticleRatings({
		authorId: id,
	})

	useEffect(() => {
		refetch()
	}, [refetch])

	let content: ReactNode = useMemo(() => {
		return <RatingList ratings={ratings} isLoading={isLoading} />
	}, [ratings, isLoading])

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
})
