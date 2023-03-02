import { createSlice } from '@reduxjs/toolkit'
import { Country, Currency } from 'shared/const/common'
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
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice