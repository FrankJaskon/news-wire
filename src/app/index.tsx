import { FC, Suspense, useEffect } from 'react'
import { initUserData, useInitializedUser } from '@/entities/User'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { ToggleFeatures } from '@/shared/lib/features'
import { HStack } from '@/shared/ui/redesigned/HStack'
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
				<div className={'App'} id='app'>
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
				<div className={'App-redesign'} id='app'>
					<Suspense fallback=''>
						<MainLayout
							header={<Navbar />}
							content={<AppRouter />}
							sidebar={<Sidebar />}
							toolbar={
								<HStack align='center' justify='center' style={{ height: '100%' }}>
									123
								</HStack>
							}
						/>
					</Suspense>
				</div>
			}
		/>
	)
}

export default App
