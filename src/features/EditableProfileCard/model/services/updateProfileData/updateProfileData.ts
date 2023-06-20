import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { ProfileType } from '@/entities/Profile'
import { User, userActions } from '@/entities/User'
import { getProfileRoute } from '@/shared/const/RoutPaths'
import { getEditableProfileCardProfileForm } from '../../selectors/getEditableProfileCardProfileForm/getEditableProfileCardProfileForm'
import { ValidateProfileError, ValidateProfileErrorType } from '../../types/ProfileScheme'
import { validateProfile } from '../validateProfile/validateProfile'

interface ResponseType {
	user: User
	profile: ProfileType
}

export const updateProfileData = createAsyncThunk<
	ProfileType,
	void,
	ThunkApiConfigType<ValidateProfileErrorType[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
	const { extra, rejectWithValue, getState } = thunkAPI
	try {
		const formData = getEditableProfileCardProfileForm(getState())
		const errors: ValidateProfileErrorType[] = validateProfile(formData)
		if (errors.length) {
			return rejectWithValue(errors)
		}
		if (!formData?.id) {
			return rejectWithValue([ValidateProfileError.NO_DATA])
		}
		const response = await extra.api.put<ResponseType>(getProfileRoute(formData?.id), formData)

		const savedUserData: User = {
			id: response.data.user.id,
			roles: response.data.user.roles,
			username: response.data.user.username,
			avatar: response.data.user.avatar,
		}
		thunkAPI.dispatch(userActions.setAuthData(savedUserData))

		return response.data.profile
	} catch (error: any) {
		return rejectWithValue([ValidateProfileError.SERVER_ERROR])
	}
})
