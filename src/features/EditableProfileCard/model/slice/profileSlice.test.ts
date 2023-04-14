import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileScheme, ValidateProfileError } from '../types/ProfileScheme'
import { profileActions, profileReducer } from './profileSlice'
import { ProfileType } from 'entities/Profile'

describe('Profile reducer', () => {
	const initialState: ProfileScheme = {
		data: undefined,
		form: undefined,
		isLoading: true,
		readonly: true,
		validateError: undefined,
		loadingError: undefined
	}
	const data: ProfileType = {
		age: 12,
		city: 'Test',
		firstname: 'Test',
		avatar: 'http://Test',
		country: Country.UKRAINE,
		currency: Currency.UAH,
		lastname: 'Test',
		username: 'Test'
	}
	test('should handle initial state', () => {
		expect(profileReducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})
	test('should set up readonly value', () => {
		expect(profileReducer(
			initialState as ProfileScheme,
			profileActions.setReadonly(false)
		)).toEqual({
			isLoading: true,
			readonly: false,
			data: undefined,
			form: undefined,
			loadingError: undefined,
			validateError: undefined
		})
	})
	test('should update profile form data', () => {
		expect(profileReducer(
			initialState as ProfileScheme,
			profileActions.updateProfileData(data)
		)).toEqual({
			form: data,
			data: undefined,
			isLoading: true,
			readonly: true,
			validateError: undefined
		})
	})
	test('should set up field form is equal to field data', () => {
		const form: ProfileType = {
			id: 1,
			age: 14,
			city: 'TestTest',
			firstname: 'TestTest',
			avatar: 'http://TestTest',
			country: Country.USA,
			currency: Currency.USD,
			lastname: 'TestTest',
			username: 'TestTest'
		}
		expect(profileReducer(
			{
				data,
				form,
				validateError: undefined,
				isLoading: false,
				readonly: true
			} as ProfileScheme,
			profileActions.cancelEdit()
		)).toEqual({
			form: data,
			data,
			isLoading: false,
			readonly: true,
			validateError: undefined
		})
	})
	test('test update and fetch profile service pending', () => {
		const initialState: ProfileScheme = {
			isLoading: false,
			readonly: false,
			loadingError: ValidateProfileError.SERVER_ERROR,
			validateError: [ValidateProfileError.INCORRECT_AGE]
		}
		// updateProfileData
		expect(profileReducer(
			initialState as ProfileScheme,
			updateProfileData.pending
		)).toEqual({
			isLoading: true,
			readonly: false,
			validateError: undefined,
			loadingError: ValidateProfileError.SERVER_ERROR,
		})
		// fetchProfileData
		expect(profileReducer(
			initialState as ProfileScheme,
			fetchProfileData.pending
		)).toEqual({
			isLoading: true,
			readonly: false,
			loadingError: undefined,
			validateError: [ValidateProfileError.INCORRECT_AGE]
		})
	})
	test('test fetch profile service fulfilled', () => {
		const initialState: ProfileScheme = {
			isLoading: true,
			readonly: true,
		}
		// fetchProfileData
		expect(profileReducer(
			initialState as ProfileScheme,
			fetchProfileData.fulfilled(data, '', 1)
		)).toEqual({
			isLoading: false,
			readonly: true,
			loadingError: undefined,
			data,
			form: data
		})
	})
	test('test update profile service fulfilled', () => {
		const newData: ProfileType = {
			firstname: 'Test',
			lastname: 'Test'
		}
		const initialState: ProfileScheme = {
			isLoading: true,
			readonly: false,
			form: newData,
			data
		}
		// updateProfileData
		expect(profileReducer(
			initialState as ProfileScheme,
			updateProfileData.fulfilled(newData, '', undefined)
		)).toEqual({
			isLoading: false,
			readonly: true,
			data: newData,
			form: newData
		})
	})
	test('test fetch profile service rejected', () => {
		const initialState: ProfileScheme = {
			isLoading: true,
			readonly: true,
			loadingError: undefined
		}
		// fetchProfileData
		expect(profileReducer(
			initialState as ProfileScheme,
			fetchProfileData.rejected(new Error(), '', 1, ValidateProfileError.SERVER_ERROR)
		)).toEqual({
			isLoading: false,
			readonly: true,
			loadingError: ValidateProfileError.SERVER_ERROR,
		})
	})
	test('test update profile service rejected', () => {
		const initialState: ProfileScheme = {
			isLoading: true,
			readonly: true,
			validateError: undefined
		}
		// updateProfileData
		expect(profileReducer(
			initialState as ProfileScheme,
			updateProfileData.rejected(new Error(), '', undefined, [ValidateProfileError.SERVER_ERROR])
		)).toEqual({
			isLoading: false,
			readonly: true,
			validateError: [ValidateProfileError.SERVER_ERROR]
		})
	})
})