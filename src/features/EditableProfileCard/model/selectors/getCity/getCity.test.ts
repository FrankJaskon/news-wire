import { StateSchema } from '@/app/providers/StoreProvider'
import { getCity } from './getCity'

describe('getCity', () => {
	test('Should return city', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				data: {
					city: 'Test'
				}
			}
		}
		expect(getCity(initialState as StateSchema)).toBe('Test')
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getCity(initialState as StateSchema)).toBe('')
	})
})