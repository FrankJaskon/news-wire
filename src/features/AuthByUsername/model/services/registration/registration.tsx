import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { User, userActions } from '@/entities/User'
import { LoginErrors } from '@/shared/config/errorResponse/errorResponse'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/localStorage'
import { getUsersRoute } from '@/shared/const/RoutPaths'

interface LoginProps {
	username: string
	password: string
}

export const registration = createAsyncThunk<User, LoginProps, ThunkApiConfigType<string>>(
	'login/registration',
	async (authData, thunkAPI) => {
		const { dispatch, extra, rejectWithValue } = thunkAPI
		try {
			const response = await extra.api.post(getUsersRoute(), authData)
			if (!response) {
				throw new Error()
			}
			dispatch(userActions.setAuthData(response.data))
			localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(response.data.id))

			return response.data
		} catch (error: any) {
			if (error?.response?.status === 403) {
				return rejectWithValue(LoginErrors.EXIST)
			}
			return rejectWithValue(LoginErrors.UNEXPECTED)
		}
	}
)
