import { FC, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import useTheme from 'shared/config/theme/useTheme'
import classNames from 'shared/lib/classNames/classNames'

const App: FC = () => {
    const { theme, toggleTheme } = useTheme()
    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>
            Toggle theme
        </button>
        <NavLink to='/about'>About page</NavLink>
        <NavLink to='/'>Main page</NavLink>
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path='/about' element={<AboutPage />} />
                <Route path='/' element={<MainPage />} />
            </Routes>
        </Suspense>
    </div>
}

export default App