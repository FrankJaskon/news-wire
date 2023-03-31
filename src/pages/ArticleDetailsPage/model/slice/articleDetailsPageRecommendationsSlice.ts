import {
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleType } from 'entities/Article'
import { fetchArticlesRecommendations } from '../services/fetchArticlesRecommendations/fetchArticlesRecommendations'
import { ArticleDetailsPageRecommendationsScheme } from '../types/articleDetailsPageRecommendationsScheme'

const recommendationsAdapter = createEntityAdapter<ArticleType>({})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
	state => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecommendationsSlice = createSlice({
	name: 'articleDetailsPageRecommendations',
	initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsScheme>({
		entities: {},
		ids: [],
		error: undefined,
		isLoading: true
	}),
	reducers: {},
	extraReducers: (builder) => {
		// fetchArticlesRecommendations
		builder.addCase(fetchArticlesRecommendations.pending, (state) => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(fetchArticlesRecommendations.fulfilled, (state, { payload }) => {
			state.isLoading = false
			recommendationsAdapter.setAll(state, payload)
		})
		builder.addCase(fetchArticlesRecommendations.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
	}
})

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice