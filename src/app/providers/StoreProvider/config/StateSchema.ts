import { CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { AddNewCommentScheme } from '@/entities/AddNewComment'
import { UserScheme } from '@/entities/User'
import { ArticleDetailsCommentsScheme } from '@/features/ArticleComments'
import { ArticleDetailsScheme } from '@/features/ArticleDetails'
import { LoginScheme } from '@/features/AuthByUsername'
import { EditableArticleScheme } from '@/features/EditableArticle'
import { ProfileScheme } from '@/features/EditableProfileCard'
import { rtkApi } from '@/shared/api/rtkApi'
import { ArticleInfiniteListScheme } from '@/widgets/ArticleInfiniteList'
import { PageScrollScheme } from '@/widgets/PageWrapper'

export interface StateSchema {
	user: UserScheme
	pageScroll: PageScrollScheme
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

	// Async reducers
	profile?: ProfileScheme
	login?: LoginScheme
	articleDetails?: ArticleDetailsScheme
	addNewComment?: AddNewCommentScheme
	articlesInfiniteList?: ArticleInfiniteListScheme
	articleDetailsComments?: ArticleDetailsCommentsScheme
	editableArticle?: EditableArticleScheme
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
