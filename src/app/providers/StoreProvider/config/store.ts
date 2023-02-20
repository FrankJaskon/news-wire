import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState: StateSchema) => {
	return configureStore({
		reducer: {
			counter: counterReducer
		},
		devTools: __iS_DEV__,
		preloadedState: initialState
	})
}