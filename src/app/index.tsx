import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import useTheme from 'shared/config/theme/useTheme'
import classNames from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

const App: FC = () => {
    const { theme, toggleTheme } = useTheme()
    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>
            Toggle theme
        </button>
        <NavLink to='/about'>About page</NavLink>
        <NavLink to='/'>Main page</NavLink>
        <AppRouter />
    </div>
}

export default App