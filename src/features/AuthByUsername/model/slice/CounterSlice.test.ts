import { DeepPartial } from '@reduxjs/toolkit'
import { CounterScheme } from '../types/CounterScheme'
import { counterActions, counterReducer } from './counterSlice'

describe('counter reducer', () => {
	const initialState: DeepPartial<CounterScheme> = {
		value: 10
	}
	it('should handle initial state', () => {
		expect(counterReducer(undefined, { type: 'unknown' })).toEqual(initialState)
	})

	it('should handle increment', () => {
		const actual = counterReducer(
			initialState as CounterScheme,
			counterActions.increment()
		)
		expect(actual.value).toBe(11)
	})

	it('should handle decrement', () => {
		const actual = counterReducer(
			initialState as CounterScheme,
			counterActions.decrement()
		)
		expect(actual.value).toBe(9)
	})

	it('should handle incrementByAmount', () => {
		const actual = counterReducer(
			initialState as CounterScheme,
			counterActions.incrementByAmount(3)
		)
		expect(actual.value).toBe(13)
	})
})