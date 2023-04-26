import { createSlice } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { LoginScheme } from '../types/LoginScheme'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: LoginScheme = {
	username: '',
	password: '',
	isLoading: false,
	error: undefined
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
		// loginByUsername
		builder.addCase(loginByUsername.pending, (state) => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(loginByUsername.fulfilled, (state) => {
			state.isLoading = false
		})
		builder.addCase(loginByUsername.rejected, (state, { payload }) => {
			state.isLoading = false
			state.error = payload as string | undefined
		})
	},
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice