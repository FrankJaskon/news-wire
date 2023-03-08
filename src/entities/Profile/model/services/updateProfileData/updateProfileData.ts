import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { routePaths } from 'shared/config/routePaths/routPaths'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { Profile, ValidateProfileError, ValidateProfileErrorType } from '../../types/ProfileScheme'
import { validateProfile } from '../validateProfile/validateProfile'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkApiConfigType<ValidateProfileErrorType[]>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI
		try {
			const formData = getProfileForm(getState())
			const errors: ValidateProfileErrorType[] = validateProfile(formData)
			if (errors.length) {
				return rejectWithValue(errors)
			}
			const response = await extra.api.put<Profile>(routePaths.profile, formData)

			return response.data
		} catch (error: any) {
			return rejectWithValue([ValidateProfileError.SERVER_ERROR])
		}
	}
)