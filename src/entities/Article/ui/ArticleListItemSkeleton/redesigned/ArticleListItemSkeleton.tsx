import { FC } from 'react'
import { AppCard } from '@/shared/ui/redesigned/AppCard'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { ViewVariant } from '../../../model/consts/articleDetailsConsts'
import { ViewVariantType } from '../../../model/types/Article'

export interface ArticleListItemSkeletonProps {
	view?: ViewVariantType
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = props => {
	const { view = ViewVariant.GRID } = props

	if (view === ViewVariant.GRID) {
		return (
			<AppCard style={{ maxWidth: 250 }}>
				<VStack gap='8'>
					<Skeleton height={170} />
					<Skeleton height={84} />
					<HStack justify='between'>
						<Skeleton height={24} width={100} />
						<Skeleton height={24} width={80} />
					</HStack>
					<HStack align='center' gap='8'>
						<Skeleton height={32} width={32} border='50%' />
						<Skeleton height={24} width={150} />
					</HStack>
				</VStack>
			</AppCard>
		)
	}

	return (
		<AppCard padding='24'>
			<VStack gap='8'>
				<HStack justify='between'>
					<HStack gap='8' align='center'>
						<Skeleton height={32} width={32} border='50%' />
						<Skeleton height={24} width={'40%'} />
						<Skeleton height={24} width={'40%'} />
					</HStack>
				</HStack>
				<VStack gap='16'>
					<Skeleton height={38} />
					<Skeleton height={38} />
					<Skeleton height={28} width={'70%'} />
					<Skeleton height={420} />
					<Skeleton height={24} />
					<Skeleton height={24} />
					<Skeleton height={24} />
					<HStack justify='end'>
						<Skeleton height={32} width={'30%'} />
					</HStack>
				</VStack>
			</VStack>
		</AppCard>
	)
}
