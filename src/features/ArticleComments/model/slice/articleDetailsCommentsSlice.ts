import {
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit'
import { CommentType } from '@/entities/Comment'
import { StateSchema } from 'app/providers/StoreProvider'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleDetailsCommentsScheme } from '../types/articleDetailsCommentsScheme'

const commentsAdapter = createEntityAdapter<CommentType>({})

export const getArticleDetailsComments = commentsAdapter.getSelectors<StateSchema>(
	state => state.articleDetailsComments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
	name: 'articleDetailsComments',
	initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsScheme>({
		entities: {},
		ids: [],
		error: undefined,
		isLoading: true
	}),
	reducers: {},
	extraReducers: (builder) => {
		// fetchCommentsByArticleId
		builder.addCase(fetchCommentsByArticleId.pending, (state) => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(fetchCommentsByArticleId.fulfilled, (state, { payload }) => {
			state.isLoading = false
			commentsAdapter.setAll(state, payload)
		})
		builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
	}
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice