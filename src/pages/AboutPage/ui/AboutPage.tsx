import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from '@/widgets/PageWrapper'

const AboutPage: FC = memo(() => {
	const { t } = useTranslation('about')
	return <PageWrapper
		data-testid='about-page'
	>
		<h1>{t('page-title')}</h1>
		{t('page-subtitle')}
	</PageWrapper>
})

export default AboutPage