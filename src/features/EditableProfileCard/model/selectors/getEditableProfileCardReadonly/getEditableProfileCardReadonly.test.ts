import { StateSchema } from '@/app/providers/StoreProvider'
import { getEditableProfileCardReadonly } from './getEditableProfileCardReadonly'

describe('getEditableProfileCardReadonly', () => {
	test('Should return isLoading', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				readonly: false,
			},
		}
		expect(getEditableProfileCardReadonly(initialState as StateSchema)).toBe(false)
	})
	test('Should work with empty state', () => {
		expect(getEditableProfileCardReadonly({} as StateSchema)).toBe(true)
	})
})
