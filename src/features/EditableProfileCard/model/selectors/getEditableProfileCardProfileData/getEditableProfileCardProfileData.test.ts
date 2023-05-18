import { StateSchema } from '@/app/providers/StoreProvider'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileType } from '@/entities/Profile'
import { getEditableProfileCardProfileData } from './getEditableProfileCardProfileData'

describe('getEditableProfileCardProfileData', () => {
	test('Should return profile data', () => {
		const profileData: ProfileType = {
			age: '12',
			city: 'Test',
			firstname: 'Test',
			avatar: 'Test',
			country: Country.UKRAINE,
			currency: Currency.UAH,
			lastname: 'Test',
			username: 'Test',
		}
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				data: profileData,
			},
		}
		expect(getEditableProfileCardProfileData(initialState as StateSchema)).toEqual(profileData)
	})
	test('Should work with empty state', () => {
		const initialState: DeepPartial<StateSchema> = {}
		expect(getEditableProfileCardProfileData(initialState as StateSchema)).toBe(undefined)
	})
})
