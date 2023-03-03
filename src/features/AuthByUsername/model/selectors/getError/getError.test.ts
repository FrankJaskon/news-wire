import { StateSchema } from 'app/providers/StoreProvider'
import { getError } from './getError'

describe('getError', () => {
	test('Should return error', () => {
		const initialState: DeepPartial<StateSchema> = {
			login: {
				error: 'Error text'
			}
		}
		expect(getError(initialState as StateSchema)).toBe('Error text')
	})
	test('Should return empty string', () => {
		const initialState: DeepPartial<StateSchema> = {
			login: {}
		}
		expect(getError(initialState as StateSchema)).toBe('')
	})
})