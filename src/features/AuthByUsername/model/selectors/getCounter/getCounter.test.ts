import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { getCounter } from './getCounter'

describe('getCounter', () => {
	const state: DeepPartial<StateSchema> = {
		counter: {
			value: 100
		}
	}
	test('Return counter object where value is equal to 100', () => {
		expect(getCounter(state as StateSchema)).toEqual({ value: 100 })
	})
	test('Objects should not be the same', () => {
		expect(getCounter(state as StateSchema)).not.toEqual({ value: 100, size: 30 })
	})
})