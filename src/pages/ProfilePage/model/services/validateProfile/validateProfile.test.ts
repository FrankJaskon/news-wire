import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { Profile, ValidateProfileError } from '../../types/ProfileScheme'
import { validateProfile } from './validateProfile'

describe('validateProfile', () => {
	test('Should return empty array', () => {
		const responseData: Profile | undefined = {
			age: 12,
			city: 'Test',
			firstname: 'Test',
			lastname: 'Test',
			username: 'Test',
			avatar: 'http://123',
			country: Country.UKRAINE,
			currency: Currency.UAH
		}
		expect(validateProfile(responseData)).toEqual([])
	})
	test('Should return array with length is equal 6', () => {
		const responseData: Profile | undefined = {
			age: 150,
			city: 'Test123',
			firstname: 'Test123',
			lastname: 'Test123',
			username: 'TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest',
			avatar: 'Test',
			country: Country.UKRAINE,
			currency: Currency.UAH
		}
		expect(validateProfile(responseData).length).toBe(6)
	})
	test('Should return array with error NO_DATA', () => {
		const responseData: Profile | undefined = undefined
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.NO_DATA])
	})
	test('Should return INCORRECT_AGE', () => {
		const responseData: Profile | undefined = { age: -1 }
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.INCORRECT_AGE])
	})
	test('Should return INCORRECT_AGE', () => {
		const responseData: Profile | undefined = { age: 140 }
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.INCORRECT_AGE])
	})
	test('Should return array with length is equal 1 if firstname is too long and have forbidden symbols', () => {
		const responseData: Profile | undefined = { firstname: '123Test123Test123Test123Test123Test123Test123Test123' }
		expect(validateProfile(responseData).length).toBe(1)
	})
	test('Should return INCORRECT_FIRSTNAME', () => {
		const responseData: Profile | undefined = { firstname: '123Test' }
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME])
	})
	test('Should return INCORRECT_FIRSTNAME', () => {
		const responseData: Profile | undefined = { firstname: 'TestTestTestTestTestTestTestTestTestTestTestTestTest' }
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.INCORRECT_FIRSTNAME])
	})
	test('Should return array with length is equal 1 if lastname is too long and have forbidden symbols', () => {
		const responseData: Profile | undefined = { lastname: '123Test123Test123Test123Test123Test123Test123Test123' }
		expect(validateProfile(responseData).length).toBe(1)
	})
	test('Should return INCORRECT_LASTNAME', () => {
		const responseData: Profile | undefined = { lastname: '123Test' }
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.INCORRECT_LASTNAME])
	})
	test('Should return INCORRECT_LASTNAME', () => {
		const responseData: Profile | undefined = { lastname: 'TestTestTestTestTestTestTestTestTestTestTestTestTest' }
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.INCORRECT_LASTNAME])
	})
	test('Should return INCORRECT_USERNAME', () => {
		const responseData: Profile | undefined = { username: 'TestTestTestTestTestTestTestTestTestTestTestTestTest' }
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.INCORRECT_USERNAME])
	})
	test('Should return INCORRECT_CITY', () => {
		const responseData: Profile | undefined = { city: '123Test' }
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.INCORRECT_CITY])
	})
	test('Should return INCORRECT_AVATAR', () => {
		const responseData: Profile | undefined = { avatar: 'Test' }
		expect(validateProfile(responseData)).toEqual([ValidateProfileError.INCORRECT_AVATAR])
	})
})