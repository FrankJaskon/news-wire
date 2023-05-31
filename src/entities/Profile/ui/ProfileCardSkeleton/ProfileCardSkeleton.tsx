import { FC, memo } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ProfileCardSkeleton as ProfileCardSkeletonDeprecated } from './deprecated/ProfileCardSkeleton'
import { ProfileCardSkeleton as ProfileCardSkeletonRedesigned } from './redesigned/ProfileCardSkeleton'

export interface ProfileCardSkeletonProps {
	className?: string
}

export const ProfileCardSkeleton: FC<ProfileCardSkeletonProps> = memo(
	(props: ProfileCardSkeletonProps) => {
		return (
			<ToggleFeatures
				feature='isAppRedesigned'
				on={<ProfileCardSkeletonRedesigned {...props} />}
				off={<ProfileCardSkeletonDeprecated {...props} />}
			/>
		)
	}
)
