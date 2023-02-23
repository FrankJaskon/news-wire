import { DeepPartial } from '@reduxjs/toolkit'
import { LoginScheme } from '../types/LoginScheme'
import { loginActions, loginReducer } from './loginSlice'

describe('counter reducer', () => {
	const initialState: DeepPartial<LoginScheme> = {
		username: '',
		password: '',
		isLoading: false
	}
	it('should handle initial state', () => {
		expect(loginReducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})

	// it('should handle increment', () => {
	// 	const actual = loginReducer(
	// 		initialState as LoginScheme,
	// 		loginActions.setLogin()
	// 	)
	// 	// expect(actual.value).toBe(11)
	// })

	// it('should handle decrement', () => {
	// 	const actual = loginReducer(
	// 		initialState as LoginScheme,
	// 		loginActions.setPassword()
	// 	)
	// 	// expect(actual.value).toBe(9)
	// })
})