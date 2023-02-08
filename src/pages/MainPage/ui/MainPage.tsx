import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage: FC = () => {
	const { t } = useTranslation('main')
	return <div>
		<h1>{t('page-title')}</h1>
		{t('page-subtitle')}
	</div>
}

export default MainPage