import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'

describe('getCounterValue', () => {
	const state: DeepPartial<StateSchema> = {
		counter: {
			value: 100
		}
	}
	test('Return counter value is equal to 100', () => {
		expect(getCounterValue(state as StateSchema)).toEqual(100)
	})
	test('Values should not be the same', () => {
		expect(getCounterValue(state as StateSchema)).not.toEqual(101)
	})
})