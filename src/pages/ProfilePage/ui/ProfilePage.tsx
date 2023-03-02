import { ProfileCard, profileReducer } from 'entities/Profile'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
	className?: string
}

const reducers: ReducerList = {
	profile: profileReducer
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
	const { className } = props
	const { t } = useTranslation('profile')

	return <LazyReducerLoader removeAfterUnmount reducers={reducers}>
		<div className={classNames(cls.ProfilePage, {}, [className])}>
			<ProfileCard />
		</div>
	</LazyReducerLoader>
}

export default ProfilePage