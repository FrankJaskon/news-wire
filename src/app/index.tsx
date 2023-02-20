import { FC, Suspense } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
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