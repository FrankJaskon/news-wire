import { DeepPartial } from '@reduxjs/toolkit'
import { UserScheme } from '../types/UserScheme'
import { userActions, userReducer } from './userSlice'

describe('counter reducer', () => {
	const initialState: DeepPartial<UserScheme> = {}
	it('should handle initial state', () => {
		expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})
})