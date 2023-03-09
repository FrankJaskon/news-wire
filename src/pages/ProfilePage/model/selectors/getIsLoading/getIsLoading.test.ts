import { StateSchema } from 'app/providers/StoreProvider'
import { getIsLoading } from './getIsLoading'

describe('getIsLoading', () => {
	test('Should return isLoading', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true
			}
		}
		expect(getIsLoading(initialState as StateSchema)).toBe(true)
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getIsLoading(initialState as StateSchema)).toBe(false)
	})
})