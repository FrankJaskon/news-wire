import { FC, memo, useCallback, useMemo } from 'react'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getProfileForm } from '../model/selectors/getProfileForm/getProfileForm'
import { getIsLoading } from '../model/selectors/getIsLoading/getIsLoading'
import { getValidateError } from '../model/selectors/getValidateError/getValidateError'
import { getLoadingError } from '../model/selectors/getLoadingError/getLoadingError'
import { getReadonly } from '../model/selectors/getReadonly/getReadonly'
import { getUserAuthData } from '@/entities/User'
import { getProfileData } from '../model/selectors/getProfileData/getProfileData'
import { useTranslation } from 'react-i18next'
import { ValidateProfileError, ValidateProfileErrorType } from '../model/types/ProfileScheme'
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect'
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { CurrencyType } from '@/entities/Currency'
import { CountryType } from '@/entities/Country'
import { updateProfileData } from '../model/services/updateProfileData/updateProfileData'
import { Text, TextVariant } from '@/shared/ui/Text'
import { ProfileCard } from '@/entities/Profile'
import { LazyReducerLoader, ReducerList } from '@/shared/lib/components/LazyReducerLoader/LazyReducerLoader'
import { VStack } from '@/shared/ui/Stack'
import { ProfileRating } from './ProfileRating'
import cls from './EditableProfileCard.module.scss'

export interface EditableProfileCardProps {
	id?: number
}

const reducers: ReducerList = {
	profile: profileReducer
}

export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props: EditableProfileCardProps) => {
	const {
		id
	} = props

	const dispatch = useAppDispatch()
	const formData = useSelector(getProfileForm)
	const isLoading = useSelector(getIsLoading)
	const validateError = useSelector(getValidateError)
	const loadingError = useSelector(getLoadingError)
	const readonly = useSelector(getReadonly)
	const authData = useSelector(getUserAuthData)
	const profileData = useSelector(getProfileData)
	const canEdit: boolean = useMemo(() => (
		Number(authData?.id) === Number(profileData?.id)
	), [authData?.id, profileData?.id])
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

	useInitialEffect(() => {
		if (id) {
			dispatch(fetchProfileData(Number(id)))
		}
	}, id)

	const onChangeFirstname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ firstname: value || '' }))
	}, [dispatch])

	const onChangeLastname = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ lastname: value || '' }))
	}, [dispatch])

	const onChangeAge = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ age: Number(value) ?? 0 }))
	}, [dispatch])

	const onChangeCity = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ city: value || '' }))
	}, [dispatch])

	const onChangeUsername = useCallback((value?: string) => {
		dispatch(profileActions.updateProfileData({ username: value ?? '' }))
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

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false))
	}, [dispatch])

	const onClose = useCallback(() => {
		dispatch(profileActions.cancelEdit())
	}, [dispatch])

	const onSave = useCallback(() => {
		authData?.id && dispatch(updateProfileData())
	}, [dispatch, authData?.id])

	return <LazyReducerLoader
		reducers={reducers}
	>
		<VStack
			gap='12'
			className={cls.EditableProfileCard}
		>
			{validateError && validateError?.map((err: ValidateProfileErrorType) => (
				<Text
					key={err}
					variant={TextVariant.ERROR}
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
				editForm={onEdit}
				cancelEdit={onClose}
				saveForm={onSave}
				canEdit={canEdit}
			/>
			{!canEdit && <ProfileRating profileId={id} />}
		</VStack>
	</LazyReducerLoader>
})