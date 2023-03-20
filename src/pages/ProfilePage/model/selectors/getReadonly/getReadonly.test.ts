import { StateSchema } from 'app/providers/StoreProvider'
import { getReadonly } from './getReadonly'

describe('getReadonly', () => {
	test('Should return isLoading', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				readonly: false
			}
		}
		expect(getReadonly(initialState as StateSchema)).toBe(false)
	})
	test('Should work with empty state', () => {
		expect(getReadonly({} as StateSchema)).toBe(true)
	})
})