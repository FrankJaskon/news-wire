import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { PageWrapper } from 'widgets/PageWrapper'

const MainPage: FC = memo(() => {
	const { t } = useTranslation('main')

	return <PageWrapper>
		<h1>{t('page-title')}</h1>
		{t('page-subtitle')}
	</PageWrapper>
})

export default MainPage