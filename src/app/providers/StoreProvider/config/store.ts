import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState: StateSchema) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer
	}

	return configureStore({
		reducer: rootReducer,
		devTools: __iS_DEV__,
		preloadedState: initialState
	})
}