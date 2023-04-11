import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'
import { $api } from 'shared/api/api'
import { pageScrollReducer } from 'widgets/PageWrapper'
import { createReducerManager } from './reducerManager'
import { ExtraArgumentType, StateSchema } from './StateSchema'
import { rtkApi } from 'shared/api/rtkApi'

export const createReduxStore = (
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
) => {
	const rootReducer: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer,
		pageScroll: pageScrollReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	}

	const reducerManager = createReducerManager(rootReducer)

	const extraArg: ExtraArgumentType = {
		api: $api,
	}

	const store = configureStore({
		reducer: reducerManager.reduce,
		devTools: __iS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg
			}
		}).concat(rtkApi.middleware),
	})

	// @ts-ignore
	store.reducerManager = reducerManager

	return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']