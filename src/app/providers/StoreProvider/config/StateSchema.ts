import { CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ArticleDetailsScheme } from 'entities/Article'
import { UserScheme } from 'entities/User'
import { AddNewCommentScheme } from 'features/AddNewComment'
import { LoginScheme } from 'features/AuthByUsername'
import { ArticleDetailsPageScheme } from 'pages/ArticleDetailsPage'
import { ArticlesPageScheme } from 'pages/ArticlesPage'
import { ProfileScheme } from 'pages/ProfilePage'
import { PageScrollScheme } from 'widgets/PageWrapper'

export interface StateSchema {
	user: UserScheme
	pageScroll: PageScrollScheme
	// Async reducers
	profile?: ProfileScheme
	login?: LoginScheme
	articleDetails?: ArticleDetailsScheme
	articleDetailsPage?: ArticleDetailsPageScheme
	addNewComment?: AddNewCommentScheme
	articlesPage?: ArticlesPageScheme
}

export type StateSchemaKey = keyof StateSchema

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager
}

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>
	reduce: Reducer<CombinedState<StateSchema>>
	add: (key: StateSchemaKey, reducer: Reducer) => void
	remove: (key: StateSchemaKey) => void
}

export interface ExtraArgumentType {
	api: AxiosInstance
}

export interface ThunkApiConfigType<T> {
	state: StateSchema
	rejectValue: T
	extra: ExtraArgumentType
}