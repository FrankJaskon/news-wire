import { FC, Suspense } from 'react'
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import LazyAboutPage from './pages/AboutPage/AboutPage.lazy'
import LazyMainPage from './pages/MainPage/MainPage.lazy'
import useTheme from './theme/useTheme'

const App: FC = () => {
    const { theme, toggleTheme } = useTheme()
    return <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>
            Toggle theme
        </button>
        <NavLink to='/about'>About page</NavLink>
        <NavLink to='/'>Main page</NavLink>
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path='/about' element={<LazyAboutPage />} />
                <Route path='/' element={<LazyMainPage />} />
            </Routes>
        </Suspense>
    </div>
}

export default App