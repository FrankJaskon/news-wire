import { FC } from 'react'
import useTheme from 'shared/config/theme/useTheme'
import classNames from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { ThemeToggler } from 'widgets/ThemeToggler'
import { AppRouter } from 'app/providers/router'

const App: FC = () => {
    const { theme } = useTheme()
    return <div className={classNames('app', {}, [theme])}>
        <Navbar />
        <AppRouter />
        <ThemeToggler variant='clear' />
    </div>
}

export default App