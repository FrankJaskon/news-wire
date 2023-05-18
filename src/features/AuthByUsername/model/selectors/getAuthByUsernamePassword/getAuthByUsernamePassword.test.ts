import { StateSchema } from '@/app/providers/StoreProvider'
import { getAuthByUsernamePassword } from './getAuthByUsernamePassword'

describe('getPassword', () => {
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {
				password: 'test',
			},
		}
		test('Return password value', () => {
			expect(getAuthByUsernamePassword(initialState as StateSchema)).toBe('test')
		})
		test('Password value should be the same as in initialState', () => {
			expect(getAuthByUsernamePassword(initialState as StateSchema)).toBe('test')
		})
	}
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {},
		}
		test('Should return empty string', () => {
			expect(getAuthByUsernamePassword(initialState as StateSchema)).toBe('')
		})
	}
})
