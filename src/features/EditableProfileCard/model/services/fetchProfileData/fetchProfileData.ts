import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { RoutePaths } from '@/shared/const/RoutPaths'
import { ValidateProfileError } from '../../types/ProfileScheme'
import type { ValidateProfileErrorType } from '../../types/ProfileScheme'
import { ProfileType } from '@/entities/Profile'

export const fetchProfileData = createAsyncThunk<ProfileType, number, ThunkApiConfigType<ValidateProfileErrorType>>(
	'profile/fetchProfileData',
	async (userId, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI
		try {
			const response = await extra.api.get<ProfileType>(`${RoutePaths.profiles}${userId}`)

			return response.data
		} catch (error: any) {
			return rejectWithValue(ValidateProfileError.SERVER_ERROR)
		}
	}
)