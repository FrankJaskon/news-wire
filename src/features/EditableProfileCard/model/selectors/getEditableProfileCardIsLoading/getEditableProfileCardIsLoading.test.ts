import { StateSchema } from '@/app/providers/StoreProvider'
import { getEditableProfileCardIsLoading } from './getEditableProfileCardIsLoading'

describe('getEditableProfileCardIsLoading', () => {
	test('Should return isLoading', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				isLoading: false,
			},
		}
		expect(getEditableProfileCardIsLoading(initialState as StateSchema)).toBe(false)
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getEditableProfileCardIsLoading(initialState as StateSchema)).toBe(true)
	})
})
