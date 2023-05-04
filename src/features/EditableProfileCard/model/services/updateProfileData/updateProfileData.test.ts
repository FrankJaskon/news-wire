
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { TestAsyncThunk } from '@/shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { ValidateProfileError } from '../../types/ProfileScheme'
import { updateProfileData } from './updateProfileData'
import type { StateSchema } from '@/app/providers/StoreProvider'

describe('updateProfileData', () => {
	test('Correct request', async () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				form: {
					id: 1,
					age: 12,
					city: 'Test',
					firstname: 'Test',
					avatar: 'http://Test',
					country: Country.UKRAINE,
					currency: Currency.UAH,
					lastname: 'Test',
					username: 'Test'
				}
			}
		}
		const thunk = new TestAsyncThunk(updateProfileData, initialState)
		thunk.api.put.mockReturnValue(Promise.resolve({
			data: initialState.profile?.form
		}))
		const result = await thunk.callThunk()

		expect(thunk.api.put).toHaveBeenCalled()
		expect(result.meta.requestStatus).toBe('fulfilled')
		expect(result.payload).toEqual(initialState.profile?.form)
	})
	test('If state is empty, should return array with NO_DATA error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData)

		const result = await thunk.callThunk()

		expect(result.payload).toEqual([ValidateProfileError.NO_DATA])
	})
	test('It request is incorrect, should return array with SERVER_ERROR', async () => {
		const initialState: DeepPartial<StateSchema> = {
			profile: {
				form: {
					id: 4,
					age: 12,
					city: 'Test',
					firstname: 'Test',
					avatar: 'http://Test',
					country: Country.UKRAINE,
					currency: Currency.UAH,
					lastname: 'Test',
					username: 'Test'
				}
			}
		}
		const thunk = new TestAsyncThunk(updateProfileData, initialState)
		thunk.api.put.mockRejectedValue(Promise.resolve())
		const result = await thunk.callThunk()

		expect(result.meta.requestStatus).toBe('rejected')
		expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
	})
})
