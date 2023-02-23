import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getIsLoading } from './getIsLoading'

describe('getLoginLogin', () => {
	test('Should return false', () => {
		const initialState: DeepPartial<StateSchema> = {
			login: {
				username: 'username@',
				password: 'test',
				isLoading: false
			}
		}
		expect(getIsLoading(initialState as StateSchema)).toBe(false)
	})
	test('IsLoading value should be the same as in initialState', () => {
		const initialState: DeepPartial<StateSchema> = {
			login: {
				username: 'username@',
				password: 'test',
				isLoading: true
			}
		}
		expect(getIsLoading(initialState as StateSchema)).toBe(true)
	})
})