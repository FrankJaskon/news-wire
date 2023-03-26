import { createSlice } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/const/localstorage'
import { UserScheme } from '../types/UserScheme'

const initialState: UserScheme = {
	authData: undefined,
	_initialized: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state) => {
			const data = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
			const initialAuthData = data && JSON.parse(data)
			state.authData = initialAuthData
			state._initialized = true
		},
		removeAuthData: (state) => {
			state.authData = initialState.authData
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
		},
	},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice