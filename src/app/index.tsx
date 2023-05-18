import { FC, Suspense, useEffect } from 'react'
import { initUserData, useInitializedUser } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import classNames from '@/shared/lib/classNames/classNames'
import { PageLoader } from '@/widgets/PageLoader'
import { AppRouter } from './providers/router'
import { Navbar, Sidebar } from './ui'

const App: FC = () => {
	const dispatch = useAppDispatch()
	const isInitialized = useInitializedUser()

	useEffect(() => {
		dispatch(initUserData())
	}, [dispatch])

	if (!isInitialized) {
		return <PageLoader fullHeight />
	}

	return (
		<div className={classNames('App')}>
			<Suspense fallback=''>
				<Navbar />
				<div className='content-wrapper'>
					<Sidebar />
					{isInitialized && <AppRouter />}
				</div>
			</Suspense>
		</div>
	)
}

export default App
