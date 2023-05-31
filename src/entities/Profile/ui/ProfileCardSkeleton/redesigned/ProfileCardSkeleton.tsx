import { FC, memo } from 'react'
import { HStack } from '@/shared/ui/redesigned/HStack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/VStack'

export interface ProfileCardSkeletonProps {
	className?: string
}

export const ProfileCardSkeleton: FC<ProfileCardSkeletonProps> = memo(
	(props: ProfileCardSkeletonProps) => {
		const { className } = props
		return (
			<VStack gap='16' className={className}>
				<HStack justify='center' align='center'>
					<Skeleton height={128} width={128} border='50%' />
				</HStack>
				<HStack gap='24'>
					<VStack gap='16'>
						<Skeleton height={38} />
						<Skeleton height={38} />
						<Skeleton height={38} />
						<Skeleton height={38} />
					</VStack>
					<VStack gap='16'>
						<Skeleton height={38} />
						<Skeleton height={38} />
						<Skeleton height={38} />
						<Skeleton height={38} />
					</VStack>
				</HStack>
			</VStack>
		)
	}
)
