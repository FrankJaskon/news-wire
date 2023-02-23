import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserScheme } from '../types/UserScheme'

const initialState: UserScheme = {
	authData: {
		id: 0,
		username: ''
	}
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload
		},
		removeAuthData: (state) => {
			state.authData = initialState.authData
		},
	},
})

export const { actions:userActions } = userSlice
export const { reducer: userReducer } = userSlice