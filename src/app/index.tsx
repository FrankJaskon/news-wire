import { FC, Suspense, useEffect } from 'react'
import { initUserData, useInitializedUser } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { ToggleFeatures } from '@/shared/lib/features'
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
		<ToggleFeatures
			feature='isAppRedesigned'
			off={
				<div className={'App'}>
					<Suspense fallback=''>
						<Navbar />
						<div className='content-wrapper'>
							<Sidebar />
							{<AppRouter />}
						</div>
					</Suspense>
				</div>
			}
			on={
				<div className={'App-redesign'}>
					<MainLayout
						header={<Navbar />}
						content={<AppRouter />}
						sidebar={<Sidebar />}
						toolbar={<div>123</div>}
					/>
				</div>
			}
		/>
	)
}

export default App
