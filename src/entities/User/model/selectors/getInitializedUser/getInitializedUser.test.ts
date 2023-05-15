import { StateSchema } from '@/app/providers/StoreProvider'
import { getInitializedUser } from './getInitializedUser'

describe('getUserAuthData', () => {
	const initialState: DeepPartial<StateSchema> = {
		user: {
			_initialized: true,
		},
	}
	test('should return false', () => {
		expect(getInitializedUser({} as StateSchema)).toBe(false)
	})
	test('should return true', () => {
		expect(getInitializedUser(initialState as StateSchema)).toBe(true)
	})
})
