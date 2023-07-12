import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const ns = ['translation', 'about', 'main', 'profile', 'article']
const supportedLngs = ['en', 'ua']
const resources = ns.reduce((acc: any, n: string) => {
	supportedLngs.forEach((lng: string) => {
		if (!acc[lng]) acc[lng] = {}
		acc[lng] = {
			...acc[lng],
			[n]: require(`../../public/locales/${lng}/${n}.json`),
		}
	})
	return acc
}, {})

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.use(Backend)
	.init({
		debug: false,
		lng: 'en',
		fallbackLng: 'en',
		ns,
		interpolation: { escapeValue: false },
		react: { useSuspense: false },
		supportedLngs,
		resources,
	})

export default i18n
