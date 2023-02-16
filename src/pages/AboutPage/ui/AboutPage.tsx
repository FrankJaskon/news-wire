import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
	const { t } = useTranslation('about')
	return <div>
		<h1>{t('page-title')}</h1>
		{t('page-subtitle')}
	</div>
}

export default AboutPage