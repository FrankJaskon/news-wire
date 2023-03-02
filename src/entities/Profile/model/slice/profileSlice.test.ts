import { Country, Currency } from 'shared/const/common'
import { Profile, ProfileScheme } from '../types/ProfileScheme'
import { profileReducer } from './profileSlice'

describe('Profile reducer', () => {
	const initialData: Profile = {
		firstname: '',
		lastname: '',
		age: 0,
		currency: Currency.USD,
		country: Country.USA,
		city: '',
		username: '',
		avatar: '',
	}

	const initialState: ProfileScheme = {
		data: initialData,
		isLoading: false,
		error: undefined
	}
	it('should handle initialState', () => {
		expect(profileReducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})
})