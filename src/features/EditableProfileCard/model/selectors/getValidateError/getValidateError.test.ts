import { StateSchema } from '@/app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/ProfileScheme'
import { getValidateError } from './getValidateError'

describe('getValidateError', () => {
	test('Should return isLoading', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				validateError: [ValidateProfileError.NO_DATA]
			}
		}
		expect(getValidateError(initialState as StateSchema)).toEqual([ValidateProfileError.NO_DATA])
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getValidateError(initialState as StateSchema)).toBe(undefined)
	})
})