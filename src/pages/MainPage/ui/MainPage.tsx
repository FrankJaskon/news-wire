import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
    const { t } = useTranslation('main')
    return <div>
        <h1>{t('main-page')}</h1>
        {t('new-text')} </div>
}

export default MainPage