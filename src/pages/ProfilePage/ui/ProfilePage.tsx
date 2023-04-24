import { FC } from 'react'
import { PageWrapper } from '@/widgets/PageWrapper'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { VStack } from '@/shared/ui/Stack'
import { EditableProfileCard, getIsLoading } from '@/features/EditableProfileCard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProfilePage: FC = () => {
	const isLoading = useSelector(getIsLoading)
	const { id } = useParams()
	return <PageWrapper>
		<VStack
			gap='16'
		>
			{!isLoading && <ProfilePageHeader />}
			<EditableProfileCard id={Number(id)} />
		</VStack>
	</PageWrapper>
}

export default ProfilePage