import { Dispatch } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import axios from 'axios'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { loginByUsername } from './loginByUsername'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('loginByUsername', () => {
	// let dispatch: Dispatch
	// let getState: () => StateSchema

	// beforeEach(() => {
	// 	dispatch = jest.fn()
	// 	getState = jest.fn()
	// })
	// test('Correct request', async () => {
	// 	const responseData = {
	// 		id: 1,
	// 		username: 'username@'
	// 	}
	// 	mockedAxios.post.mockReturnValue(Promise.resolve({
	// 		data: responseData
	// 	}))

	// 	const action = loginByUsername({
	// 		username: '123',
	// 		password: '123'
	// 	})
	// 	const result = await action(dispatch, getState, undefined)

	// 	expect(mockedAxios.post).toHaveBeenCalled()
	// 	expect(dispatch).toHaveBeenCalledTimes(3)
	// 	expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(responseData))
	// 	expect(result.meta.requestStatus).toBe('fulfilled')
	// 	expect(result.payload).toEqual(responseData)
	// })
	// test('Incorrect request', async () => {
	// 	mockedAxios.post.mockRejectedValue(Promise.resolve({
	// 		status: 403
	// 	}))

	// 	const action = loginByUsername({
	// 		username: '123',
	// 		password: '123'
	// 	})
	// 	const result = await action(dispatch, getState, undefined)

	// 	expect(mockedAxios.post).toHaveBeenCalled()
	// 	expect(dispatch).toHaveBeenCalledTimes(2)
	// 	expect(result.meta.requestStatus).toBe('rejected')
	// 	expect(result.payload).toBe('An error occurred while logging in')
	// })
	test('Correct request', async () => {
		const responseData = {
			id: 1,
			username: 'username@',
		}
		mockedAxios.post.mockReturnValue(Promise.resolve({
			data: responseData
		}))

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({
			username: '123',
			password: '123'
		})

		expect(mockedAxios.post).toHaveBeenCalled()
		expect(thunk.dispatch).toHaveBeenCalledTimes(3)
		expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(responseData))
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(responseData)
	})
	test('Incorrect request', async () => {
		mockedAxios.post.mockRejectedValue(Promise.resolve({
			status: 403
		}))

		const thunk = new TestAsyncThunk(loginByUsername)
		const result = await thunk.callThunk({
			username: '123',
			password: '123'
		})

		expect(mockedAxios.post).toHaveBeenCalled()
		expect(thunk.dispatch).toHaveBeenCalledTimes(2)
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe('An error occurred while logging in')
	})
})
