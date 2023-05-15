import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AddNewCommentScheme } from '../types/AddNewCommentScheme'

const initialState: AddNewCommentScheme = {
	error: undefined,
	text: undefined,
}

const addNewCommentSlice = createSlice({
	name: 'addNewComment',
	initialState,
	reducers: {
		setCommentText: (state, action: PayloadAction<string | undefined>) => {
			state.text = action.payload
		},
	},
})

export const { actions: addNewCommentActions } = addNewCommentSlice
export const { reducer: addNewCommentReducer } = addNewCommentSlice
