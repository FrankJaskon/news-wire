import { FC } from 'react'
import { AppCard } from 'shared/ui/AppCard'
import { Skeleton } from 'shared/ui/Skeleton'
import { ViewVariant, ViewVariantType } from '../ArticleList/ArticleList'
import { HStack, VStack } from 'shared/ui/Stack'

export interface ArticleListItemSkeletonProps {
	view?: ViewVariantType
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
	const {
		view
	} = props

	if (view === ViewVariant.GRID) {
		return <AppCard
			style={{ maxWidth: 230 }}
		>
			<VStack
				gap='gap8'
			>
				<Skeleton
					height={200}
				/>
				<HStack
					justify='between'
				>
					<Skeleton
						height={20}
						width={100}
					/>
					<Skeleton
						height={20}
						width={80}
					/>
				</HStack>
				<Skeleton
					height={30}
				/>
			</VStack>
		</AppCard>
	}

	return (
		<AppCard
			style={{ minWidth: '100%' }}
		>
			<VStack
				gap='gap12'
			>
				<HStack
					justify='between'
				>
					<HStack
						gap='gap4'
					>
						<Skeleton
							height={40}
							width={40}
							borderRadius='50%'
						/>
						<Skeleton height={20} width={150} />
					</HStack>
					<Skeleton height={20} width={120} />
				</HStack>
				<Skeleton
					height={30}
					width={600}
				/>
				<HStack
					gap='gap4'
				>
					<Skeleton
						height={30}
						width={60}
					/>
					<Skeleton
						height={30}
						width={80}
					/>
				</HStack>
				<Skeleton
					height={180}
				/>
				<Skeleton
					height={90}
				/>
				<Skeleton
					height={70}
				/>
				<Skeleton
					height={40}
					width={120}
				/>
			</VStack>
		</AppCard>
	)
}