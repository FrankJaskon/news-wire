import { UserRole } from '@/entities/User'
import { LoginErrors } from '@/shared/config/errorResponse/errorResponse'
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/localStorage'
import { loginByUsername } from './loginByUsername'

describe('loginByUsername', () => {
	const responseData = {
		id: 1,
		username: 'username@',
		roles: [UserRole.USER],
	}
	test('Correct request', async () => {
		const thunk = new TestAsyncThunk(loginByUsername)
		thunk.api.post.mockReturnValue(
			Promise.resolve({
				data: responseData,
			})
		)
		const result = await thunk.callThunk({
			username: '123',
			password: '123',
		})

		expect(thunk.api.post).toHaveBeenCalled()
		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(Number(localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY))).toBe(responseData.id)
		expect(result.payload).toEqual(responseData)
	})
	test('Incorrect request', async () => {
		const thunk = new TestAsyncThunk(loginByUsername)
		thunk.api.post.mockRejectedValueOnce({
			response: {
				status: 403,
			},
		})
		const result = await thunk.callThunk({
			username: '123',
			password: '123',
		})

		expect(thunk.api.post).toHaveBeenCalled()
		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe(LoginErrors.INCORRECT_DATA)
	})
})
