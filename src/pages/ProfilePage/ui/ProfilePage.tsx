import { CountryType } from 'entities/Country'
import { CurrencyType } from 'entities/Currency'
import {
	fetchProfileData,
	getIsLoading,
	getProfileForm,
	getReadonly,
	profileActions,
	ProfileCard,
	profileReducer
} from 'entities/Profile'
import { getError } from 'entities/Profile/model/selectors/getError/getError'
import { FC, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import classNames from 'shared/lib/classNames/classNames'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

interface ProfilePageProps {
	className?: string
}

const reducers: ReducerList = {
	profile: profileReducer
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
	const { className } = props
	const dispatch = useAppDispatch()
	const formData = useSelector(getProfileForm)
	const isLoading = useSelector(getIsLoading)
	const error = useSelector(getError)
	const readonly = useSelector(getReadonly)

	useEffect(() => {
		dispatch(fetchProfileData())
	}, [dispatch])

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ firstname: value || '' }))
	}, [dispatch])

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ lastname: value || '' }))
	}, [dispatch])

	const onChangeAge = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ age: Number(value) || 0 }))
	}, [dispatch])

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ city: value || '' }))
	}, [dispatch])

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ username: value || '' }))
	}, [dispatch])

	const onChangeAvatar = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ avatar: value || '' }))
	}, [dispatch])

	const onChangeCurrency = useCallback((value?: CurrencyType) => {
		dispatch(profileActions.updateProfileData({ currency: value }))
	}, [dispatch])

	const onChangeCountry = useCallback((value?: CountryType) => {
		dispatch(profileActions.updateProfileData({ country: value }))
	}, [dispatch])

	return <LazyReducerLoader reducers={reducers} removeAfterUnmount>
		<div className={classNames('', {}, [className])}>
			<ProfilePageHeader
				readonly={readonly}
			/>
			<ProfileCard
				data={formData}
				isLoading={isLoading}
				error={error}
				readonly={readonly}
				updateFirstname={onChangeFirstname}
				updateLastname={onChangeLastname}
				updateAge={onChangeAge}
				updateCity={onChangeCity}
				updateUsername={onChangeUsername}
				updateAvatar={onChangeAvatar}
				updateCurrency={onChangeCurrency}
				updateCountry={onChangeCountry}
			/>
		</div>
	</LazyReducerLoader>
}

export default ProfilePage