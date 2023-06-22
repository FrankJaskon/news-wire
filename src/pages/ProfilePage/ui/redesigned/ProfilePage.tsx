import { FC, memo, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
	EditableProfileCard,
	profileReducer,
	useEditableProfileCardLoadingError,
} from '@/features/EditableProfileCard'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { PageLoader } from '@/widgets/PageLoader'
import { PageWrapper } from '@/widgets/PageWrapper'
import { UserActivity } from '@/widgets/UserActivity'

const reducers: ReducerList = {
	profile: profileReducer,
}

let content = <PageLoader />

export const ProfilePage: FC = memo(() => {
	const { id } = useParams()
	const [isMounted, setIsMounted] = useState<boolean>(false)
	const loadingError = useEditableProfileCardLoadingError()

	if (isMounted || __PROJECT__ === 'storybook') {
		content = (
			<PageWrapper data-testid='profile-page'>
				<VStack gap='24'>
					<EditableProfileCard id={Number(id)} />
					{!loadingError && <UserActivity id={Number(id)} />}
				</VStack>
			</PageWrapper>
		)
	}

	return (
		<LazyReducerLoader reducers={reducers} setIsReducerMounted={setIsMounted}>
			{content}
		</LazyReducerLoader>
	)
})
