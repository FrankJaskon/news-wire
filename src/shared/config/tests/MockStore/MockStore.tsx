import { ReducersMapObject } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider/testing'

type MockStoreType = (
	initialState?: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) => (component: ReactNode) => ReactNode

export const MockStore: MockStoreType = (initialState = {}, asyncReducers) => (component: ReactNode) => {
	return <StoreProvider
		initialState={initialState as StateSchema}
		asyncReducers={asyncReducers}
	>
		{ component }
	</StoreProvider>
}