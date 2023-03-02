import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { StateSchema } from '../config/StateSchema'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
	children?: ReactNode
	initialState?: StateSchema
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
	const {
		children,
		initialState
	} = props

	const navigate = useNavigate()

	const store = createReduxStore(initialState, navigate)

	return <Provider store={store}>
		{children}
	</Provider>
}