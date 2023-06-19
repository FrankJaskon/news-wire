import { FC, memo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthorArticleTextList } from '@/features/AuthorArticleTextList'
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard'
import {
	LazyReducerLoader,
	ReducerList,
} from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { VStack } from '@/shared/ui/redesigned/VStack'
import { PageLoader } from '@/widgets/PageLoader'
import { PageWrapper } from '@/widgets/PageWrapper'

const reducers: ReducerList = {
	profile: profileReducer,
}

let content = <PageLoader />

export const ProfilePage: FC = memo(() => {
	const { id } = useParams()
	const [isMounted, setIsMounted] = useState<boolean>(false)

	if (isMounted || __PROJECT__ === 'storybook') {
		content = (
			<PageWrapper data-testid='profile-page'>
				<VStack gap='24'>
					<EditableProfileCard id={Number(id)} />
					<AuthorArticleTextList />
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
