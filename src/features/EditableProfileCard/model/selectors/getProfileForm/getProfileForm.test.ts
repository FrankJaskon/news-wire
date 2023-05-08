import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileType } from '@/entities/Profile'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
	test('Should return profile form data', () => {
		const profileData: ProfileType = {
			age: 12,
			city: 'Test',
			firstname: 'Test',
			avatar: 'Test',
			country: Country.UKRAINE,
			currency: Currency.UAH,
			lastname: 'Test',
			username: 'Test'
		}
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				form: profileData
			}
		}
		expect(getProfileForm(initialState as StateSchema)).toEqual(profileData)
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getProfileForm(initialState as StateSchema)).toBe(undefined)
	})
})