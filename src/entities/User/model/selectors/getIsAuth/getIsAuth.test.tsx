import { StateSchema } from 'app/providers/StoreProvider'
import { getIsAuth } from './getIsAuth'

describe('getUserAuthData', () => {
	{
		const initialState: DeepPartial<StateSchema> = {
			user: {
				authData: undefined
			}
		}
		test('initialState should be equal', () => {
			expect(getIsAuth(initialState as StateSchema)).toBe(false)
		})
	}
	{
		const initialState: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: 1
				}
			}
		}
		test('initialState should not be equal', () => {
			expect(getIsAuth(initialState as StateSchema)).toBe(true)
		})
	}
})