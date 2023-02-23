import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReactNode } from 'react'

type MockStoreType = (initialState?: DeepPartial<StateSchema>) => (component: ReactNode) => ReactNode

export const MockStore: MockStoreType = (initialState = {}) => (component: ReactNode) => {
	return <StoreProvider initialState={initialState as StateSchema}>
		{ component }
	</StoreProvider>
}