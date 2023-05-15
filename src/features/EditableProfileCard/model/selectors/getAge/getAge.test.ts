import { StateSchema } from '@/app/providers/StoreProvider'
import { getAge } from './getAge'

describe('getAge', () => {
	test('Should return age', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				data: {
					age: '40'
				}
			}
		}
		expect(getAge(initialState as StateSchema)).toBe('40')
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getAge(initialState as StateSchema)).toBe('')
	})
})