import { FC, Suspense, useEffect } from 'react'
import useTheme from 'shared/config/theme/useTheme'
import classNames from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { Sidebar } from 'widgets/Sidebar'
import { appThemes } from 'shared/config/theme/ThemeContext'

const App: FC = () => {
	const { theme } = useTheme()

	useEffect(() => {
		const body = document.querySelector('body')
		body.classList.remove(appThemes.LIGHT, appThemes.DARK)
		body.classList.add(theme)
	}, [theme])

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