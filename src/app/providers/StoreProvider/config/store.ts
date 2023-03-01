import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState: StateSchema) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __iS_DEV__,
		preloadedState: initialState,
	})

	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']