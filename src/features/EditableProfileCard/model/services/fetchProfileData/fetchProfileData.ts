import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { RoutePaths } from 'shared/config/RoutePaths/RoutPaths'
import { ValidateProfileError } from '../../types/ProfileScheme'
import type { Profile, ValidateProfileErrorType } from '../../types/ProfileScheme'

export const fetchProfileData = createAsyncThunk<Profile, number, ThunkApiConfigType<ValidateProfileErrorType>>(
	'profile/fetchProfileData',
	async (userId, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI
		try {
			const response = await extra.api.get<Profile>(`${RoutePaths.profiles}${userId}`)

			return response.data
		} catch (error: any) {
			return rejectWithValue(ValidateProfileError.SERVER_ERROR)
		}
	}
)