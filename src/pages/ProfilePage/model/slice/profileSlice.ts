import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { Profile, ProfileScheme, ValidateProfileErrorType } from '../types/ProfileScheme'

const initialState: ProfileScheme = {
	data: undefined,
	form: undefined,
	isLoading: true,
	readonly: true,
	validateError: undefined,
	loadingError: undefined
}

const profileSlice = createSlice({
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
			state.validateError = undefined
			state.form = state.data
		},
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		}
	},
	extraReducers: (builder) => {
		// fetchProfileData
		builder.addCase(fetchProfileData.pending, (state) => {
			state.loadingError = undefined
			state.isLoading = true
		})
		builder.addCase(fetchProfileData.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.data = payload
			state.form = payload
		})
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.isLoading = false
			state.loadingError = action.payload as ValidateProfileErrorType
		})
		// updateProfileData
		builder.addCase(updateProfileData.pending, (state) => {
			state.validateError = undefined
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
			state.validateError = action.payload as ValidateProfileErrorType[]
		})
	},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice