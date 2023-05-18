import { StateSchema } from '@/app/providers/StoreProvider'
import { getAuthByUsernameIsLoading } from './getAuthByUsernameIsLoading'

describe('getLoginLogin', () => {
	test('Should return false', () => {
		{
			const initialState: DeepPartial<StateSchema> = {
				login: {
					isLoading: false,
				},
			}
			expect(getAuthByUsernameIsLoading(initialState as StateSchema)).toBe(false)
		}
		{
			const initialState: DeepPartial<StateSchema> = {
				login: {},
			}
			expect(getAuthByUsernameIsLoading(initialState as StateSchema)).toBe(false)
		}
	})
	test('IsLoading value should be the same as in initialState', () => {
		const initialState: DeepPartial<StateSchema> = {
			login: {
				isLoading: true,
			},
		}
		expect(getAuthByUsernameIsLoading(initialState as StateSchema)).toBe(true)
	})
})
