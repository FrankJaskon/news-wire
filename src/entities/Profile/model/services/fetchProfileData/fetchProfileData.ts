import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { routePaths } from 'shared/config/routePaths/routPaths'
import { Profile, ValidateProfileError, ValidateProfileErrorType } from '../../types/ProfileScheme'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkApiConfigType<ValidateProfileErrorType>>(
	'profile/fetchProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI
		try {
			const response = await extra.api.get<Profile>(routePaths.profile)

			return response.data
		} catch (error: any) {
			return rejectWithValue(ValidateProfileError.SERVER_ERROR)
		}
	}
)