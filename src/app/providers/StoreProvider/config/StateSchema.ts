import { CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { AddNewCommentScheme } from '@/entities/AddNewComment'
import { ArticleDetailsScheme } from '@/entities/Article'
import { UserScheme } from '@/entities/User'
import { ArticleDetailsCommentsScheme } from '@/features/ArticleComments'
import { LoginScheme } from '@/features/AuthByUsername'
import { ProfileScheme } from '@/features/EditableProfileCard'
import { rtkApi } from '@/shared/api/rtkApi'
import { PageScrollScheme } from '@/widgets/PageWrapper'
import { ArticleInfiniteListScheme } from '@/widgets/ArticleInfiniteList'

export interface StateSchema {
	user: UserScheme
	pageScroll: PageScrollScheme
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

	// Async reducers
	profile?: ProfileScheme
	login?: LoginScheme
	articleDetails?: ArticleDetailsScheme
	addNewComment?: AddNewCommentScheme
	articlesInfiniteList?: ArticleInfiniteListScheme
	articleDetailsComments?: ArticleDetailsCommentsScheme
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