import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { ProfileType } from '@/entities/Profile'
import { getProfileRoute } from '@/shared/const/RoutPaths'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { ValidateProfileError, ValidateProfileErrorType } from '../../types/ProfileScheme'
import { validateProfile } from '../validateProfile/validateProfile'

export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkApiConfigType<ValidateProfileErrorType[]>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI
		try {
			const formData = getProfileForm(getState())
			const errors: ValidateProfileErrorType[] = validateProfile(formData)
			if (errors.length) {
				return rejectWithValue(errors)
			}
			if (!formData?.id) {
				return rejectWithValue([ValidateProfileError.NO_DATA])
			}
			const response = await extra.api.put<ProfileType>(getProfileRoute(formData?.id), formData)

			return response.data
		} catch (error: any) {
			return rejectWithValue([ValidateProfileError.SERVER_ERROR])
		}
	}
)