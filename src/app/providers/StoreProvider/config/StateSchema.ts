import { Action, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { ProfileScheme } from 'entities/Profile'
import { UserScheme } from 'entities/User'
import { LoginScheme } from 'features/AuthByUsername'

export interface StateSchema {
	user: UserScheme

	// Async reducers
	profile?: ProfileScheme
	login?: LoginScheme
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}