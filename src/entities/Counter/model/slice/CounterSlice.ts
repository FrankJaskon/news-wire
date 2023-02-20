import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CounterScheme } from '../types/CounterScheme'

const initialState: CounterScheme = {
	value: 10,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1
		},
		decrement: (state) => {
			state.value -= 1
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload
		},
	},
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice