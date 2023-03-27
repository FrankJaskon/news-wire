import { StateSchema } from 'app/providers/StoreProvider'
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { initArticlesPage } from './initArticlesPage'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage', () => {
	test('should call dispatch if _initialized = false', async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			// @ts-ignore
			articlesPage: {
				_initialized: false
			} as DeepPartial<StateSchema>
		})

		const result = await thunk.callThunk()

		expect(thunk.dispatch).toHaveBeenCalledTimes(4)
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(fetchArticlesList).toBeCalled()
	})
	test('should not call dispatch if _initialized = true', async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			// @ts-ignore
			articlesPage: {
				_initialized: true
			} as DeepPartial<StateSchema>
		})

		const result = await thunk.callThunk()

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(fetchArticlesList).not.toBeCalled()
	})
})