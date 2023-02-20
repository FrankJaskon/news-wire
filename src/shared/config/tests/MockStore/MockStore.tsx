import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReactNode } from 'react'

export const MockStore = (component: ReactNode, initialState: DeepPartial<StateSchema>) => {
	return <StoreProvider initialState={initialState as StateSchema}>
		{ component }
	</StoreProvider>
}