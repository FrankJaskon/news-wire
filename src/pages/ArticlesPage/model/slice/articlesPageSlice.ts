import {
	createEntityAdapter,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleType, ViewVariant, ViewVariantType } from 'entities/Article'
import { ArticlesSortVariant, ArticlesSortVariantType } from 'features/ArticlesSortSelector'
import { ArticlesTypes, ArticlesTypesType } from 'features/ArticleTypeTabs'
import { VIEW_ARTICLES_LOCAL_STORAGE_KEY } from 'shared/const/localstorage'
import { SortOrder, SortOrderType } from 'shared/types/types'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticlesPageScheme } from '../types/ArticlesPageScheme'

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
		hasMore: true,
		_initialized: false,
		search: undefined,
		order: SortOrder.UP_DOWN,
		sort: ArticlesSortVariant.DATE,
		filter: ArticlesTypes.ALL

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
		},
		setOrder: (state: ArticlesPageScheme, action: PayloadAction<SortOrderType>) => {
			state.order = action.payload
		},
		setSort: (state: ArticlesPageScheme, action: PayloadAction<ArticlesSortVariantType>) => {
			state.sort = action.payload
		},
		setSearch: (state: ArticlesPageScheme, action: PayloadAction<string>) => {
			state.search = action.payload
		},
		setFilter: (state: ArticlesPageScheme, action: PayloadAction<ArticlesTypesType>) => {
			state.filter = action.payload
		},
		setInitializedValues: (state: ArticlesPageScheme) => {
			const initialView = localStorage.getItem(
				VIEW_ARTICLES_LOCAL_STORAGE_KEY) as ViewVariantType || ViewVariant.GRID
			const initialLimit = initialView === ViewVariant.GRID ? 9 : 5
			state.view = initialView
			state.limit = initialLimit
			state._initialized = true
		}
	},
	extraReducers: (builder) => {
		// fetchArticlesList
		builder.addCase(fetchArticlesList.pending, (state, action) => {
			state.error = undefined
			state.isLoading = true

			if (action.meta.arg.replace) {
				articlesPageAdapter.removeAll(state)
			}
		})
		builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
			state.isLoading = false
			state.hasMore = action.payload.length >= state.limit

			if (action.meta.arg.replace) {
				articlesPageAdapter.setAll(state, action.payload)
			} else {
				articlesPageAdapter.addMany(state, action.payload)
			}
		})
		builder.addCase(fetchArticlesList.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
	}
})

export const { reducer: articlesPageReducer } = articlesPageSlice
export const { actions: articlesPageActions } = articlesPageSlice