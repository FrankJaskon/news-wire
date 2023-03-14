import { CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { UserScheme } from 'entities/User'
import { LoginScheme } from 'features/AuthByUsername'
import { ArticleDetailsScheme } from 'pages/ArticleDetailsPage'
import { ProfileScheme } from 'pages/ProfilePage'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
	user: UserScheme

	// Async reducers
	profile?: ProfileScheme
	login?: LoginScheme
	articleDetails?: ArticleDetailsScheme
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: Reducer<CombinedState<StateSchema>>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ExtraArgumentType {
	api: AxiosInstance
	navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkApiConfigType<T> {
	state: StateSchema
	rejectValue: T
	extra: ExtraArgumentType
}