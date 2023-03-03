import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer
}

type ReducerListItem = [StateSchemaKey, Reducer]

interface LazyReducerLoaderProps {
	children: ReactNode
	reducers: {
		[name in keyof StateSchemaKey]?: Reducer
	}
	removeAfterUnmount?: boolean
}

export const LazyReducerLoader: FC<LazyReducerLoaderProps> = (props) => {
	const {
		children,
		reducers,
		removeAfterUnmount = false
	} = props
	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			store.reducerManager.add(name as StateSchemaKey, reducer as Reducer)
			dispatch({ type: `@INIT ${name as StateSchemaKey} reducer` })
		})
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey)
					dispatch({ type: `@REMOVE ${name as StateSchemaKey} reducer` })
				})
			}
		}
	// eslint-disable-next-line
	}, [])

	return <>
		{children}
	</>
}