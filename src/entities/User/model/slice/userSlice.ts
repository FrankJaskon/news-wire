import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/localStorage'
import { setFeatureFlags } from '@/shared/lib/features'
import { initUserData } from '../services/initUserData/initUserData'
import { saveJsonSettings } from '../services/saveJsonSettings/saveJsonSettings'
import { User, UserScheme } from '../types/UserScheme'

const initialState: UserScheme = {
	authData: undefined,
	_initialized: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload
			setFeatureFlags(action.payload.features)
		},
		removeAuthData: state => {
			state.authData = initialState.authData
			setFeatureFlags({})
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY)
		},
	},
	extraReducers: builder => {
		// saveJsonSettings
		builder.addCase(saveJsonSettings.fulfilled, (state, { payload }) => {
			if (!state.authData) return
			state.authData.jsonSettings = payload
		})
		// initUserData
		builder.addCase(initUserData.fulfilled, (state, { payload }) => {
			state.authData = payload
			state._initialized = true
			setFeatureFlags(payload.features)
		})
		builder.addCase(initUserData.rejected, state => {
			state._initialized = true
		})
	},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
