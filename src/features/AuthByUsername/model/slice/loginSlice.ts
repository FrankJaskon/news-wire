import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginScheme } from '../types/LoginScheme'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginScheme = {
	username: '',
	password: '',
	isLoading: false
}

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setLogin: (state, action: PayloadAction<string>) => {
			state.username = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		}
	},
	extraReducers: (builder) => {
		builder.addCase(loginByUsername.pending, (state) => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(loginByUsername.fulfilled, (state, { payload }) => {
			state.isLoading = false
		})
		builder.addCase(loginByUsername.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
	},
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice