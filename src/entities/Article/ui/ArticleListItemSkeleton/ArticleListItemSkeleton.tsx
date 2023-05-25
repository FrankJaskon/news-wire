import { FC } from 'react'
import { AppCard } from '@/shared/ui/deprecated/AppCard'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { ViewVariant } from '../../model/consts/articleDetailsConsts'
import { ViewVariantType } from '../../model/types/Article'

export interface ArticleListItemSkeletonProps {
	view?: ViewVariantType
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = props => {
	const { view = ViewVariant.GRID } = props

	if (view === ViewVariant.GRID) {
		return (
			<AppCard style={{ maxWidth: 230 }}>
				<VStack gap='8'>
					<Skeleton height={200} />
					<HStack justify='between'>
						<Skeleton height={20} width={100} />
						<Skeleton height={20} width={80} />
					</HStack>
					<Skeleton height={30} />
				</VStack>
			</AppCard>
		)
	}

	return (
		<AppCard style={{ minWidth: '100%' }}>
			<VStack gap='12'>
				<HStack justify='between'>
					<HStack gap='4'>
						<Skeleton height={40} width={40} />
						<Skeleton height={20} width={150} />
					</HStack>
					<Skeleton height={20} width={120} />
				</HStack>
				<Skeleton height={30} width={600} />
				<HStack gap='4'>
					<Skeleton height={30} width={60} />
					<Skeleton height={30} width={80} />
				</HStack>
				<Skeleton height={180} />
				<Skeleton height={90} />
				<Skeleton height={70} />
				<Skeleton height={40} width={120} />
			</VStack>
		</AppCard>
	)
}
