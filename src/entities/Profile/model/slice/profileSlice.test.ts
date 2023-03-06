import { ProfileScheme } from '../types/ProfileScheme'
import { profileReducer } from './profileSlice'

describe('Profile reducer', () => {
	const initialState: ProfileScheme = {
		data: undefined,
		form: undefined,
		isLoading: false,
		error: undefined,
		readonly: true
	}
	it('should handle initialState', () => {
		expect(profileReducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})
})