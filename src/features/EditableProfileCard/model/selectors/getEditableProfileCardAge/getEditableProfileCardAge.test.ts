import { StateSchema } from '@/app/providers/StoreProvider'
import { getEditableProfileCardAge } from './getEditableProfileCardAge'

describe('getEditableProfileCardAge', () => {
	test('Should return age', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				data: {
					age: '40',
				},
			},
		}
		expect(getEditableProfileCardAge(initialState as StateSchema)).toBe('40')
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getEditableProfileCardAge(initialState as StateSchema)).toBe('')
	})
})
