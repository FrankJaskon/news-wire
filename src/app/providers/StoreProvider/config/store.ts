import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState: StateSchema) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducer,
		login: loginReducer
	}

	return configureStore({
		reducer: rootReducer,
		devTools: __iS_DEV__,
		preloadedState: initialState
	})
}