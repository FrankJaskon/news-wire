import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { ValidateProfileError, ValidateProfileErrorType } from '../../types/ProfileScheme'
import { validateProfile } from '../validateProfile/validateProfile'
import { ProfileType } from 'entities/Profile'

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
			const response = await extra.api.put<ProfileType>(`${RoutePaths.profiles}${formData?.id}`, formData)

			return response.data
		} catch (error: any) {
			return rejectWithValue([ValidateProfileError.SERVER_ERROR])
		}
	}
)