import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/localStorage'
import { getUserDataByIdQuery } from '../../../api/userApi'
import { User } from '../../types/UserScheme'

export const initUserData = createAsyncThunk<User, void, ThunkApiConfigType<string>>(
	'user/initUserData',
	async (_, thunkAPI) => {
		const { dispatch, rejectWithValue } = thunkAPI
		try {
			const id = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
			if (!id) {
				throw rejectWithValue('Error. User is not authorized')
			}
			const response = await dispatch(getUserDataByIdQuery(Number(id))).unwrap()

			if (!response) {
				throw rejectWithValue('Error. Something went wrong')
			}

			return response
		} catch (error: any) {
			return rejectWithValue('Error')
		}
	}
)
