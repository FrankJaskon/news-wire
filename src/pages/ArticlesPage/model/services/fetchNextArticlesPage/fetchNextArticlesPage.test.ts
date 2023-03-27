import { StateSchema } from 'app/providers/StoreProvider'
import { ViewVariant } from 'entities/Article'
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticlesPage', () => {
	test('should call dispatch if hasMore = true and !isLoading', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			// @ts-ignore
			articlesPage: {
				entities: {},
				ids: [],
				error: undefined,
				isLoading: false,
				view: ViewVariant.GRID,
				page: 2,
				limit: 10,
				hasMore: true
			} as DeepPartial<StateSchema>
		})

		const result = await thunk.callThunk()

		expect(thunk.dispatch).toHaveBeenCalledTimes(4)
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(fetchArticlesList).toBeCalled()
	})
	test('should not call dispatch if isLoading = true', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			// @ts-ignore
			articlesPage: {
				entities: {},
				ids: [],
				error: undefined,
				isLoading: true,
				view: ViewVariant.GRID,
				page: 2,
				limit: 10,
				hasMore: true
			} as DeepPartial<StateSchema>
		})

		const result = await thunk.callThunk()

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(fetchArticlesList).not.toBeCalled()
	})
	test('should not call dispatch !hasMore', async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			// @ts-ignore
			articlesPage: {
				entities: {},
				ids: [],
				error: undefined,
				isLoading: false,
				view: ViewVariant.GRID,
				page: 2,
				limit: 10,
				hasMore: false
			} as DeepPartial<StateSchema>
		})

		const result = await thunk.callThunk()

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(fetchArticlesList).not.toBeCalled()
	})
})