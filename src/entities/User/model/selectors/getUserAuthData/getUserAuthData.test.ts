import { StateSchema } from '@/app/providers/StoreProvider'
import { getUserAuthData } from './getUserAuthData'

describe('getUserAuthData', () => {
	const initialState: DeepPartial<StateSchema> = {
		user: {
			authData: {
				id: 0,
				username: 'Test'
			}
		}
	}
	test('initialState should be equal', () => {
		expect(getUserAuthData(initialState as StateSchema)).toEqual({
			id: 0,
			username: 'Test'
		})
	})
	test('initialState should not be equal', () => {
		expect(getUserAuthData(initialState as StateSchema)).not.toEqual({
			id: 1,
			username: 'Test123'
		})
	})
})