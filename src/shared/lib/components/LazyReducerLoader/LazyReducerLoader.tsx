import { Reducer } from '@reduxjs/toolkit'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer
}

interface LazyReducerLoaderProps {
	children: ReactNode
	reducers: ReducerList
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
			dispatch({ type: `@INIT ${name} reducer` })
			store.reducerManager.add('login', reducer)
			return () => {
				if (removeAfterUnmount) {
					dispatch({ type: `@REMOVE ${name} reducer` })
					store.reducerManager.remove('login')
				}
			}
		})
	// eslint-disable-next-line
	}, [])

	return <>
		{children}
	</>
}