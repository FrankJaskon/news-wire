import { CountryType } from 'entities/Country'
import { CurrencyType } from 'entities/Currency'
import { ProfileCard } from 'entities/Profile'
import { FC, useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'
import { LazyReducerLoader, ReducerList } from 'shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { Text } from 'shared/ui/Text'
import { getIsLoading } from '../model/selectors/getIsLoading/getIsLoading'
import { getLoadingError } from '../model/selectors/getLoadingError/getLoadingError'
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm'
import { getReadonly } from '../model/selectors/getReadonly/getReadonly'
import { getValidateError } from '../model/selectors/getValidateError/getValidateError'
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { ValidateProfileError, ValidateProfileErrorType } from '../model/types/ProfileScheme'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducerList = {
	profile: profileReducer
}

const ProfilePage: FC = () => {
	const dispatch = useAppDispatch()
	const formData = useSelector(getProfileForm)
	const isLoading = useSelector(getIsLoading)
	const validateError = useSelector(getValidateError)
	const loadingError = useSelector(getLoadingError)
	const readonly = useSelector(getReadonly)
	const { t } = useTranslation('profile')

	const ValidateErrorTranslation = useMemo(() => ({
		[ValidateProfileError.INCORRECT_AGE]: t('error.age'),
		[ValidateProfileError.INCORRECT_AVATAR]: t('error.avatar'),
		[ValidateProfileError.INCORRECT_DATA]: t('error.incorrect-data'),
		[ValidateProfileError.INCORRECT_FIRSTNAME]: t('error.firstname'),
		[ValidateProfileError.INCORRECT_LASTNAME]: t('error.lastname'),
		[ValidateProfileError.INCORRECT_USERNAME]: t('error.username'),
		[ValidateProfileError.INCORRECT_CITY]: t('error.city'),
		[ValidateProfileError.NO_DATA]: t('error.empty'),
		[ValidateProfileError.SERVER_ERROR]: t('error.server-error'),
	}), [t])

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchProfileData())
		}
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
		<>
			{(!loadingError && !isLoading) && <ProfilePageHeader
				readonly={readonly}
			/>}
			{validateError && validateError?.map((err: ValidateProfileErrorType) => (
				<Text
					key={err}
					variant='error'
					content={validateError && ValidateErrorTranslation[err]}
				/>
			))}
			<ProfileCard
				data={formData}
				isLoading={isLoading}
				readonly={readonly}
				error={loadingError && ValidateErrorTranslation[loadingError]}
				updateFirstname={onChangeFirstname}
				updateLastname={onChangeLastname}
				updateAge={onChangeAge}
				updateCity={onChangeCity}
				updateUsername={onChangeUsername}
				updateAvatar={onChangeAvatar}
				updateCurrency={onChangeCurrency}
				updateCountry={onChangeCountry}
			/>
		</>
	</LazyReducerLoader>
}

export default ProfilePage