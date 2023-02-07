import { FC, Suspense } from 'react'
import useTheme from 'shared/config/theme/useTheme'
import classNames from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from 'app/providers/router'
import { SideBar } from 'widgets/SideBar'
import { useTranslation } from 'react-i18next'
import { LanguageToggler } from 'features/LanguageToggler'

const MyComponent: FC = () => {
    const { t, i18n } = useTranslation();

    return <div>
        <h1>{t('welcome-to-react')}</h1>
        <LanguageToggler />
    </div>
}

const App: FC = () => {
    const { theme } = useTheme()
    return <Suspense fallback=''>
        <div className={classNames('App', {}, [theme])}>
            <Navbar />
            <MyComponent />
            <div className='page-wrapper'>
                <SideBar />
                <div className='page-content'>
                    <AppRouter />
                </div>
            </div>
        </div>
    </Suspense>
}

export default App