import { StateSchema } from '@/app/providers/StoreProvider'
import { getPassword } from './getPassword'

describe('getPassword', () => {
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {
				password: 'test',
			}
		}
		test('Return password value', () => {
			expect(getPassword(initialState as StateSchema)).toBe('test')
		})
		test('Password value should be the same as in initialState', () => {
			expect(getPassword(initialState as StateSchema)).toBe('test')
		})
	}
	{
		const initialState: DeepPartial<StateSchema> = {
			login: {}
		}
		test('Should return empty string', () => {
			expect(getPassword(initialState as StateSchema)).toBe('')
		})
	}
})