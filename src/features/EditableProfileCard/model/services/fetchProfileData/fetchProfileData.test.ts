
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ProfileType } from '@/entities/Profile'
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { ValidateProfileError } from '../../types/ProfileScheme'
import { fetchProfileData } from './fetchProfileData'

describe('fetchProfileData', () => {
	const responseData: ProfileType = {
		age: '12',
		city: 'Test',
		firstname: 'Test',
		avatar: 'http://Test',
		country: Country.UKRAINE,
		currency: Currency.UAH,
		lastname: 'Test',
		username: 'Test'
	}

	test('Correct request', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData)
		thunk.api.get.mockReturnValue(Promise.resolve({
			data: responseData
		}))
		const result = await thunk.callThunk(1)

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(responseData)
	})
	test('Incorrect request', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData)
		thunk.api.get.mockRejectedValue(Promise.resolve())
		const result = await thunk.callThunk(1)

		expect(thunk.api.get).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toBe(ValidateProfileError.SERVER_ERROR)
	})
})
