import { StateSchema } from '@/app/providers/StoreProvider'
import { ValidateProfileError } from '../../types/ProfileScheme'
import { getEditableProfileCardLoadingError } from './getEditableProfileCardLoadingError'

describe('getEditableProfileCardLoadingError', () => {
	test('Should return loadingError', () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				loadingError: ValidateProfileError.NO_DATA,
			},
		}
		expect(getEditableProfileCardLoadingError(initialState as StateSchema)).toBe(
			ValidateProfileError.NO_DATA
		)
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getEditableProfileCardLoadingError(initialState as StateSchema)).toBe(undefined)
	})
})
