import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Profile, ProfileScheme } from '../types/ProfileScheme'

const initialState: ProfileScheme = {
	data: undefined,
	form: undefined,
	isLoading: false,
	error: undefined,
	readonly: true
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		updateProfileData: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload
			}
		},
		cancelEdit: (state) => {
			state.readonly = true
			state.form = state.data
		},
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		}
	},
	extraReducers: (builder) => {
		// fetchProfileData
		builder.addCase(fetchProfileData.pending, (state) => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(fetchProfileData.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.data = payload
			state.form = payload
		})
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload as string || undefined
		})
		// updateProfileData
		builder.addCase(updateProfileData.pending, (state) => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(updateProfileData.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.data = payload
			state.form = payload
			state.readonly = true
		})
		builder.addCase(updateProfileData.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload as string || undefined
		})
	},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice