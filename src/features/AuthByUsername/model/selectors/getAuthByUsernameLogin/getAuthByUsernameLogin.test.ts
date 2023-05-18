import { StateSchema } from '@/app/providers/StoreProvider'
import { getAuthByUsernameLogin } from './getAuthByUsernameLogin'

describe('getLogin', () => {
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {
				username: 'username@',
				password: 'test',
				isLoading: false,
			},
		}
		test('Return login object is equal initialState', () => {
			expect(getAuthByUsernameLogin(initialState as StateSchema)).toEqual({
				username: 'username@',
				password: 'test',
				isLoading: false,
			})
		})
		test('Objects should be not the same', () => {
			expect(getAuthByUsernameLogin(initialState as StateSchema)).not.toEqual({
				username: 'username@123',
				password: 'test123',
				isLoading: true,
			})
		})
	}
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {},
		}
		test('Should return empty object', () => {
			expect(getAuthByUsernameLogin(initialState as StateSchema)).toEqual({})
		})
	}
})
