import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getPassword } from './getPassword'

describe('getPassword', () => {
	const initialState: DeepPartial<StateSchema> = {
		login: {
			username: 'username@',
			password: 'test',
			isLoading: false
		}
	}
	test('Return password value', () => {
		expect(getPassword(initialState as StateSchema)).toBe('test')
	})
	test('Password value should be the same as in initialState', () => {
		expect(getPassword(initialState as StateSchema)).toBe('test')
	})
})