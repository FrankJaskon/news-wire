import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserScheme } from '../types/UserScheme'

const initialState: UserScheme = {
	authData: undefined,
	_initialized: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload
			state._initialized = true
		},
		removeAuthData: (state) => {
			state.authData = initialState.authData
		},
	},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice