import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Country, Currency } from 'shared/const/common'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { Profile, ProfileScheme } from '../types/ProfileScheme'

const initialData: Profile = {
	firstname: '',
	lastname: '',
	age: 0,
	currency: Currency.USD,
	country: Country.USA,
	city: '',
	username: '',
	avatar: '',
}

const initialState: ProfileScheme = {
	data: initialData,
	isLoading: false,
	error: undefined
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.pending, (state) => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(fetchProfileData.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.data = payload
		})
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
	},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice