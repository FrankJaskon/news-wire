import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { LoginErrors } from 'shared/config/errorResponse/errorResponse'
import { routePaths } from 'shared/config/routePaths/routPaths'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { Profile } from '../../types/ProfileScheme'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkApiConfigType<string>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue, getState } = thunkAPI
		try {
			const formData = getProfileForm(getState())
			const response = await extra.api.put<Profile>(routePaths.profile, formData)

			return response.data
		} catch (error: any) {
			if (error.status === 403) {
				return rejectWithValue(LoginErrors.INCORRECT_DATA)
			}
			return rejectWithValue(LoginErrors.UNEXPECTED)
		}
	}
)