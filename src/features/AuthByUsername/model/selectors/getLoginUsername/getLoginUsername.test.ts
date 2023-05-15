import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginLogin } from './getLoginUsername'

describe('getLoginLogin', () => {
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {
				username: 'username@',
			},
		}
		test('Return username value', () => {
			expect(getLoginLogin(initialState as StateSchema)).toBe('username@')
		})
		test('Username value should not be the same as in initialState', () => {
			expect(getLoginLogin(initialState as StateSchema)).not.toBe('user')
		})
	}
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {},
		}
		test('Should return empty string', () => {
			expect(getLoginLogin(initialState as StateSchema)).toBe('')
		})
	}
})
