import { FC, Suspense, useEffect } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getInitializedUser, userActions } from 'entities/User'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/const/localstorage'

const App: FC = () => {
	const dispatch = useDispatch()
	const isInitialized = useSelector(getInitializedUser)

	useEffect(() => {
		const data = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
		const initialAuthData = data && JSON.parse(data)
		dispatch(userActions.setAuthData(initialAuthData))
	}, [dispatch])

	return <div className={classNames('App', {}, [])}>
		<Suspense fallback=''>
			<Navbar />
			<div className='page-wrapper'>
				<Sidebar />
				<div className='page-content'>
					{isInitialized && <AppRouter />}
				</div>
			</div>
		</Suspense>
	</div>
}

export default App