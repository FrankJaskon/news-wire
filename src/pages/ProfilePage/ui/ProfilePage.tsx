import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { EditableProfileCard, getIsLoading } from '@/features/EditableProfileCard'
import { VStack } from '@/shared/ui/Stack'
import { PageWrapper } from '@/widgets/PageWrapper'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

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