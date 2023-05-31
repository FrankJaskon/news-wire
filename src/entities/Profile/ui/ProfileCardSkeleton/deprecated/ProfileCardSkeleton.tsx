import { FC, memo } from 'react'
import { AppCard } from '@/shared/ui/deprecated/AppCard'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { VStack } from '@/shared/ui/redesigned/VStack'

export interface ProfileCardSkeletonProps {
	className?: string
}

export const ProfileCardSkeleton: FC<ProfileCardSkeletonProps> = memo(
	(props: ProfileCardSkeletonProps) => {
		const { className } = props
		return (
			<div className={className}>
				<AppCard>
					<HStack gap='24'>
						<VStack gap='8'>
							<Skeleton height={24} width={150} />
							<Skeleton height={33} />
							<Skeleton height={24} width={150} />
							<Skeleton height={33} />
							<Skeleton height={24} width={150} />
							<Skeleton height={33} />
							<Skeleton height={24} width={150} />
							<Skeleton height={33} />
						</VStack>
						<Skeleton height={150} width={150} />
					</HStack>
				</AppCard>
			</div>
		)
	}
)
