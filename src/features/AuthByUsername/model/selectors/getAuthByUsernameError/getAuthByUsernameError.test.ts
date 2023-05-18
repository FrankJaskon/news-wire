import { StateSchema } from '@/app/providers/StoreProvider'
import { getAuthByUsernameError } from './getAuthByUsernameError'

describe('getAuthByUsernameError', () => {
	test('Should return error', () => {
		const initialState: DeepPartial<StateSchema> = {
			login: {
				error: 'Error text',
			},
		}
		expect(getAuthByUsernameError(initialState as StateSchema)).toBe('Error text')
	})
	test('Should return empty string', () => {
		const initialState: DeepPartial<StateSchema> = {
			login: {},
		}
		expect(getAuthByUsernameError(initialState as StateSchema)).toBe('')
	})
})
