import { DeepPartial } from '@reduxjs/toolkit'
import { LoginScheme } from '../types/LoginScheme'
import { loginActions, loginReducer } from './loginSlice'

describe('counter reducer', () => {
	{
		const initialState: DeepPartial<LoginScheme> = {
			username: '',
			password: '',
			isLoading: false
		}
		it('should handle initial state', () => {
			expect(loginReducer(undefined, { type: 'unknown' })).toEqual(initialState)
		})
	}
	{
		const initialState: DeepPartial<LoginScheme> = {
			username: '',
		}
		it('should set new username', () => {
			expect(loginReducer(initialState as LoginScheme, loginActions.setLogin('123'))).toEqual({
				username: '123',
			})
		})
	}
	{
		const initialState: DeepPartial<LoginScheme> = {
			password: '',
		}
		it('should set new password', () => {
			expect(loginReducer(initialState as LoginScheme, loginActions.setPassword('123'))).toEqual({
				password: '123',
			})
		})
	}
})