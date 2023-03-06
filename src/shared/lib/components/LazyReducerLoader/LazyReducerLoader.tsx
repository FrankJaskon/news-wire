import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer
}

interface LazyReducerLoaderProps {
	reducers: ReducerList
	removeAfterUnmount?: boolean
	children: ReactNode
}

export const LazyReducerLoader: FC<LazyReducerLoaderProps> = (props) => {
	const {
		children,
		reducers,
		removeAfterUnmount,
	} = props

	const store = useStore() as ReduxStoreWithManager
	const dispatch = useDispatch()

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]) => {
			store.reducerManager.add(name as StateSchemaKey, reducer)
			dispatch({ type: `@INIT ${name } reducer` })
		})
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey)
					dispatch({ type: `@DESTROY ${name} reducer` })
				})
			}
		}
	// eslint-disable-next-line
	}, [dispatch])

	return <>
		{children}
	</>
}