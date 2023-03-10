import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { NavigateOptions, To } from 'react-router-dom'
import { $api } from 'shared/api/api'
import { createReducerManager } from './reducerManager'
import { ExtraArgumentType, StateSchema } from './StateSchema'

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void,
) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const extraArg: ExtraArgumentType = {
		api: $api,
		navigate
	}

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __iS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg
			}
		}),
	})

	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']