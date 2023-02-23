import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getError } from './getError'

describe('getError', () => {
	test('Should return error', () => {
		const initialState: DeepPartial<StateSchema> = {
			login: {
				username: 'username@',
				password: 'test',
				isLoading: false,
				error: 'Error text'
			}
		}
		expect(getError(initialState as StateSchema)).toBe('Error text')
	})
	test('Should return undefined', () => {
		const initialState: DeepPartial<StateSchema> = {
			login: {
				username: 'username@',
				password: 'test',
				isLoading: true
			}
		}
		expect(getError(initialState as StateSchema)).toBe(undefined)
	})
})