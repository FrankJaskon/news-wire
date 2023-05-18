import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkApiConfigType } from '@/app/providers/StoreProvider'
import { setJsonSettingsMutation } from '../../../api/userApi'
import { getUserAuthData } from '../../selectors/getUserAuthData/getUserAuthData'
import { JsonSettings } from '../../types/jsonSettings'

export const saveJsonSettings = createAsyncThunk<
	JsonSettings,
	JsonSettings,
	ThunkApiConfigType<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
	const { dispatch, rejectWithValue, getState } = thunkAPI
	const userData = getUserAuthData(getState())
	try {
		if (!userData) {
			throw rejectWithValue('Error. User is not authorized')
		}
		const response = await dispatch(
			setJsonSettingsMutation({
				id: userData.id,
				jsonSettings: {
					...userData.jsonSettings,
					...newJsonSettings,
				},
			})
		).unwrap()

		if (!response.jsonSettings) {
			throw rejectWithValue('Error. Something went wrong')
		}

		return response.jsonSettings
	} catch (error: any) {
		return rejectWithValue('Error')
	}
})
