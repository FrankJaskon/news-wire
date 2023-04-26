import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileType } from '@/entities/Profile'
import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
	test('Should return profile data', () => {
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
				data: profileData
			}
		}
		expect(getProfileData(initialState as StateSchema)).toEqual(profileData)
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getProfileData(initialState as StateSchema)).toBe(undefined)
	})
})