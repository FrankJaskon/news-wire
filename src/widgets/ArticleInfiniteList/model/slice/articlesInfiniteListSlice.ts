import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleType, ViewVariant, ViewVariantType } from '@/entities/Article'
import { ArticlesTypes, ArticlesTypesType } from '@/entities/ArticleTypeTabs'
import { SortVariant, SortVariantType } from '@/entities/SortSelector'
import { VIEW_ARTICLES_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage'
import { SortOrder, SortOrderType } from '@/shared/types/types'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ArticleInfiniteListScheme } from '../types/ArticleInfiniteListScheme'

const articlesPageAdapter = createEntityAdapter<ArticleType>({})

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
	state => state.articlesInfiniteList || articlesPageAdapter.getInitialState()
)

const articlesInfiniteListSlice = createSlice({
	name: 'articlesInfiniteListSlice',
	initialState: articlesPageAdapter.getInitialState<ArticleInfiniteListScheme>({
		entities: {},
		ids: [],
		error: undefined,
		isLoading: true,
		view: ViewVariant.LIST,
		limit: 10,
		page: 1,
		hasMore: true,
		_initialized: false,
		search: undefined,
		order: SortOrder.UP_DOWN,
		sort: SortVariant.DATE,
		filter: ArticlesTypes.ALL,
	}),
	reducers: {
		setView: (state: ArticleInfiniteListScheme, action: PayloadAction<ViewVariantType>) => {
			state.view = action.payload
			localStorage.setItem(VIEW_ARTICLES_LOCAL_STORAGE_KEY, action.payload)
		},
		setPage: (state: ArticleInfiniteListScheme, action: PayloadAction<number>) => {
			state.page = action.payload
		},
		setLimit: (state: ArticleInfiniteListScheme, action: PayloadAction<number>) => {
			state.limit = action.payload
		},
		setOrder: (state: ArticleInfiniteListScheme, action: PayloadAction<SortOrderType>) => {
			state.order = action.payload
		},
		setSort: (state: ArticleInfiniteListScheme, action: PayloadAction<SortVariantType>) => {
			state.sort = action.payload
		},
		setSearch: (state: ArticleInfiniteListScheme, action: PayloadAction<string>) => {
			state.search = action.payload
		},
		setFilter: (state: ArticleInfiniteListScheme, action: PayloadAction<ArticlesTypesType>) => {
			state.filter = action.payload
		},
		setInitializedValues: (state: ArticleInfiniteListScheme) => {
			const initialView =
				(localStorage.getItem(VIEW_ARTICLES_LOCAL_STORAGE_KEY) as ViewVariantType) ||
				ViewVariant.GRID
			const initialLimit = initialView === ViewVariant.GRID ? 9 : 5
			state.view = initialView
			state.limit = initialLimit
			state._initialized = true
		},
	},
	extraReducers: builder => {
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
	},
})

export const { reducer: articlesInfiniteListReducer } = articlesInfiniteListSlice
export const { actions: articlesInfiniteListActions } = articlesInfiniteListSlice
