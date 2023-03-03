import { ProfileCard, profileReducer } from 'entities/Profile'
import { FC } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'

interface ProfilePageProps {
	className?: string
}

const reducers: ReducerList = {
	profile: profileReducer
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
	const { className } = props

	return <LazyReducerLoader removeAfterUnmount reducers={reducers}>
		<div className={classNames('', {}, [className])}>
			<ProfileCard />
		</div>
	</LazyReducerLoader>
}

export default ProfilePage