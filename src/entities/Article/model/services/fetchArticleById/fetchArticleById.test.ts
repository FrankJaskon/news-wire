
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticleById } from './fetchArticleById'
import { ArticleType } from '../../types/ArticleDetailsScheme'
import { ValidateArticleDetailsError } from '../../consts/articleDetailsConsts'

describe('fetchArticleById', () => {
	const responseData: DeepPartial<ArticleType> = {
		id: 1,
		title: 'title test',
		subtitle: 'subtitle test'
	}

	test('Correct request', async () => {
		const thunk = new TestAsyncThunk(fetchArticleById)
		thunk.api.get.mockReturnValue(Promise.resolve({
			data: responseData
		}))
		const result = await thunk.callThunk(1)

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(responseData)
	})
	test('Incorrect request', async () => {
		const thunk = new TestAsyncThunk(fetchArticleById)
		thunk.api.get.mockRejectedValue(Promise.resolve())
		const result = await thunk.callThunk(1)

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe(ValidateArticleDetailsError.SERVER_ERROR)
	})
	test('No id request', async () => {
		const thunk = new TestAsyncThunk(fetchArticleById)
		thunk.api.get.mockRejectedValue(Promise.resolve())
		// @ts-ignore
		const result = await thunk.callThunk()

		expect(thunk.api.get).not.toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe(ValidateArticleDetailsError.NO_DATA)
	})
})
