import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { initArticlesPage } from './initArticlesPage'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage', () => {
	test('should call dispatch if _initialized = false', async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesInfiniteList: {
				_initialized: false
			}
		})

		await thunk.callThunk({} as URLSearchParams)

		expect(thunk.dispatch).toHaveBeenCalledTimes(4)
		expect(fetchArticlesList).toBeCalled()
	})
	test('should not call dispatch if _initialized = true', async () => {
		const thunk = new TestAsyncThunk(initArticlesPage, {
			articlesInfiniteList: {
				_initialized: true
			}
		})

		await thunk.callThunk({} as URLSearchParams)

		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(fetchArticlesList).not.toBeCalled()
	})
})