import { StateSchema } from '@/app/providers/StoreProvider'
import { getIsLoading } from './getIsLoading'

describe('getIsLoading', () => {
	test('Should return isLoading', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				isLoading: false
			}
		}
		expect(getIsLoading(initialState as StateSchema)).toBe(false)
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getIsLoading(initialState as StateSchema)).toBe(true)
	})
})