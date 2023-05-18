import { StateSchema } from '@/app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/ProfileScheme'
import { getEditableProfileCardValidateError } from './getEditableProfileCardValidateError'

describe('getEditableProfileCardValidateError', () => {
	test('Should return isLoading', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				validateError: [ValidateProfileError.NO_DATA],
			},
		}
		expect(getEditableProfileCardValidateError(initialState as StateSchema)).toEqual([
			ValidateProfileError.NO_DATA,
		])
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getEditableProfileCardValidateError(initialState as StateSchema)).toBe(undefined)
	})
})
