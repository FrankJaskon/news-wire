import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleType, ViewVariant, ViewVariantType } from 'entities/Article'
import { VIEW_ARTICLES_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageScheme } from '../types/articlesPageScheme'

const articlesPageAdapter = createEntityAdapter<ArticleType>({})

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
	state => state.articlesPage || articlesPageAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
	name: 'articlesPageSlice',
	initialState: articlesPageAdapter.getInitialState<ArticlesPageScheme>({
		entities: {},
		ids: [],
		error: undefined,
		isLoading: true,
		view: ViewVariant.GRID,
		page: 1,
		limit: 10,
		hasMore: true
	}),
	reducers: {
		setView: (state: ArticlesPageScheme, action: PayloadAction<ViewVariantType>) => {
			state.view = action.payload
			localStorage.setItem(VIEW_ARTICLES_LOCAL_STORAGE_KEY, action.payload)
		},
		setPage: (state: ArticlesPageScheme, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setLimit: (state: ArticlesPageScheme, action: PayloadAction<number>) => {
			state.limit = action.payload
		}
	},
	extraReducers: (builder) => {
		// fetchArticlesList
		builder.addCase(fetchArticlesList.pending, (state) => {
			state.error = undefined
			state.isLoading = true
		})
		builder.addCase(fetchArticlesList.fulfilled, (state, { payload }) => {
			state.isLoading = false
			articlesPageAdapter.addMany(state, payload)
			state.hasMore = payload.length > 0
		})
		builder.addCase(fetchArticlesList.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
	}
})

export const { reducer: articlesPageReducer } = articlesPageSlice
export const { actions: articlesPageActions } = articlesPageSlice