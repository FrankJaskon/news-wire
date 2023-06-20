import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { ProfileType } from '@/entities/Profile'
import { getProfileRoute } from '@/shared/const/RoutPaths'
import { ValidateProfileError } from '../../types/ProfileScheme'
import type { ValidateProfileErrorType } from '../../types/ProfileScheme'

export const fetchProfileData = createAsyncThunk<
	ProfileType,
	number,
	ThunkApiConfigType<ValidateProfileErrorType>
>('profile/fetchProfileData', async (userId, thunkAPI) => {
	const { extra, rejectWithValue } = thunkAPI
	try {
		const response = await extra.api.get<ProfileType>(getProfileRoute(userId))

		return response.data
	} catch (error: any) {
		if (error.response && error.response.status === 404) {
			return rejectWithValue(ValidateProfileError.NO_PROFILE)
		}
		return rejectWithValue(ValidateProfileError.SERVER_ERROR)
	}
})
