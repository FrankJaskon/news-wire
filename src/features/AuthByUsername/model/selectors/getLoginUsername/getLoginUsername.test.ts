import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginLogin } from './getLoginUsername'

describe('getLoginLogin', () => {
	const initialState: DeepPartial<StateSchema> = {
		login: {
			username: 'username@',
			password: 'test',
			isLoading: false
		}
	}
	test('Return username value', () => {
		expect(getLoginLogin(initialState as StateSchema)).toBe('username@')
	})
	test('Username value should not be the same as in initialState', () => {
		expect(getLoginLogin(initialState as StateSchema)).not.toBe('user')
	})
})