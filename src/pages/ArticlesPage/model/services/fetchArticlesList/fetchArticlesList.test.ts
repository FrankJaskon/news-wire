
import { ArticleType } from 'entities/Article'
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from './fetchArticlesList'

describe('fetchArticlesList', () => {
	const responseData: DeepPartial<ArticleType[]> = [{
		id: 1,
		title: 'title test',
		subtitle: 'subtitle test'
	}]

	test('Correct request', async () => {
		const thunk = new TestAsyncThunk(fetchArticlesList)
		thunk.api.get.mockReturnValue(Promise.resolve({
			data: responseData
		}))
		const result = await thunk.callThunk()

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(responseData)
	})
	test('Incorrect request', async () => {
		const thunk = new TestAsyncThunk(fetchArticlesList)
		thunk.api.get.mockRejectedValue(Promise.resolve())
		const result = await thunk.callThunk()

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('error')
	})
})
