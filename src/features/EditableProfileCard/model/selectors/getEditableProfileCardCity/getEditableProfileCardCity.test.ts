import { StateSchema } from '@/app/providers/StoreProvider'
import { getEditableProfileCardCity } from './getEditableProfileCardCity'

describe('getEditableProfileCardCity', () => {
	test('Should return city', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				data: {
					city: 'Test',
				},
			},
		}
		expect(getEditableProfileCardCity(initialState as StateSchema)).toBe('Test')
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getEditableProfileCardCity(initialState as StateSchema)).toBe('')
	})
})
