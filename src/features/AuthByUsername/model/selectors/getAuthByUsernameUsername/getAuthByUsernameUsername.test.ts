import { StateSchema } from '@/app/providers/StoreProvider'
import { getAuthByUsernameUsername } from './getAuthByUsernameUsername'

describe('getLoginLogin', () => {
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {
				username: 'username@',
			},
		}
		test('Return username value', () => {
			expect(getAuthByUsernameUsername(initialState as StateSchema)).toBe('username@')
		})
		test('Username value should not be the same as in initialState', () => {
			expect(getAuthByUsernameUsername(initialState as StateSchema)).not.toBe('user')
		})
	}
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {},
		}
		test('Should return empty string', () => {
			expect(getAuthByUsernameUsername(initialState as StateSchema)).toBe('')
		})
	}
})
