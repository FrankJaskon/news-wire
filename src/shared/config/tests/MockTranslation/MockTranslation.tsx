import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nTestConfig from 'shared/config/i18n/i18nTestConfig'

export const MockTranslation = (component: ReactNode) => {
	return <I18nextProvider i18n={i18nTestConfig}>
		{ component }
	</I18nextProvider>
}