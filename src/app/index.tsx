import { FC, Suspense } from 'react'
import useTheme from 'shared/config/theme/useTheme'
import classNames from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
	const { theme } = useTheme()

	return <Suspense fallback=''>
		<div className={classNames('App', {}, [theme])}>
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