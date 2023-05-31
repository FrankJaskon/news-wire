import { FC } from 'react'
import { ToggleFeatures } from '@/shared/lib/features'
import { ProfilePage as ProfilePageDeprecated } from './deprecated/ProfilePage'
import { ProfilePage as ProfilePageRedesigned } from './redesigned/ProfilePage'

const ProfilePage: FC = () => {
	return (
		<ToggleFeatures
			feature='isAppRedesigned'
			on={<ProfilePageRedesigned />}
			off={<ProfilePageDeprecated />}
		/>
	)
}

export default ProfilePage
