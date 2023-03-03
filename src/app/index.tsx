import { FC, Suspense, useEffect } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { LOCAL_STORAGE_TOKEN_KEY } from 'shared/const/localstorage'

const App: FC = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const data = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
		if (data) {
			const initialAuthData = JSON.parse(data)
			dispatch(userActions.setAuthData(initialAuthData))
		}

	}, [dispatch])

	return <Suspense fallback=''>
		<div className={classNames('App', {}, [])}>
			<Navbar />
			<div className='page-wrapper'>
				<Sidebar />
				<div className='page-content'>
					<AppRouter />
				</div>
			</div>
		</div>
	</Suspense>
}

export default App