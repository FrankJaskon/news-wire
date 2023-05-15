import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import type { ArticleType, ArticleDetailsScheme } from '../types/ArticleDetailsScheme'

const initialState: ArticleDetailsScheme = {
	data: undefined,
	isLoading: true,
	error: undefined,
	readonly: true,
}

export const articleDetailsSlice = createSlice({
	name: 'articleDetails',
	initialState,
	reducers: {
		setArticleData: (state, action: PayloadAction<ArticleType>) => {
			state.data = action.payload
		},
	},
	extraReducers: builder => {
		// fetchArticleById
		builder.addCase(fetchArticleById.pending, state => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(fetchArticleById.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.data = payload
		})
		builder.addCase(fetchArticleById.rejected, (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		})
	},
})

export const { actions: articleDetailsActions } = articleDetailsSlice
export const { reducer: articleDetailsReducer } = articleDetailsSlice
