import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

describe('loginByUsername', () => {
	const responseData = {
		id: 1,
		username: 'username@',
	}
	test('Correct request', async () => {
		const thunk = new TestAsyncThunk(loginByUsername)
		thunk.api.post.mockReturnValue(Promise.resolve({
			data: responseData
		}))
		const result = await thunk.callThunk({
			username: '123',
			password: '123'
		})

		expect(thunk.api.post).toHaveBeenCalled()
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(responseData))
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(responseData)
	})
	test('Incorrect request', async () => {
		const thunk = new TestAsyncThunk(loginByUsername)
		thunk.api.post.mockRejectedValue(Promise.resolve({
			status: 403
		}))
		const result = await thunk.callThunk({
			username: '123',
			password: '123'
		})

		expect(thunk.api.post).toHaveBeenCalled()
		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('An error occurred while logging in')
	})
})
