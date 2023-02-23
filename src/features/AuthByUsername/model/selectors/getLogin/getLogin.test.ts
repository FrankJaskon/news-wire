import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getLogin } from './getLogin'

describe('getLogin', () => {
	const initialState: DeepPartial<StateSchema> = {
		login: {
			username: 'username@',
			password: 'test',
			isLoading: false
		}
	}
	test('Return login object is equal initialState', () => {
		expect(getLogin(initialState as StateSchema)).toEqual({
			username: 'username@',
			password: 'test',
			isLoading: false
		})
	})
	test('Objects should be not the same', () => {
		expect(getLogin(initialState as StateSchema)).not.toEqual({
			username: 'username@123',
			password: 'test123',
			isLoading: true
		})
	})
})