import { FC, Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getInitializedUser, userActions } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar, Sidebar } from './ui'

const App: FC = () => {
	const dispatch = useAppDispatch()
	const isInitialized = useSelector(getInitializedUser)

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])

	return <div className={classNames('App', {}, [])}>
		<Suspense fallback=''>
			<Navbar />
			<div className='content-wrapper'>
				<Sidebar />
				{isInitialized && <AppRouter />}
			</div>
		</Suspense>
	</div>
}

export default App