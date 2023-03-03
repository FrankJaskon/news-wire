import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { NavigateOptions, To } from 'react-router-dom'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { StateSchema } from './StateSchema'

export const createReduxStore = (
	initialState?: StateSchema,
	navigate?: (to: To, options?: NavigateOptions) => void
) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __iS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
					navigate
				}
			}
		}),
	})

	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']