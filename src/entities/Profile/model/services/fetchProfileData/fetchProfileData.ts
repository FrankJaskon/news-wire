import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from 'app/providers/StoreProvider'
import { LoginErrors } from 'shared/config/errorResponse/errorResponse'
import { routePaths } from 'shared/config/routePaths/routPaths'
import { Profile } from '../../types/ProfileScheme'

interface LoginProps {
	username: string,
	password: string
}

export const fetchProfileData = createAsyncThunk<Profile, LoginProps, ThunkApiConfigType<string>>(
	'profile/fetchProfileData',
	async (_, thunkAPI) => {
		const { extra, rejectWithValue } = thunkAPI
		try {
			const response = await extra.api.get<Profile>(routePaths.profile)

			return response.data
		} catch (error) {
			if (error.status === 403) {
				return rejectWithValue(LoginErrors.INCORRECT_DATA)
			}
			return rejectWithValue(LoginErrors.UNEXPECTED)
		}
	}
)