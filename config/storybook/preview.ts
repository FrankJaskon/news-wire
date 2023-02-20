import { addDecorator } from '@storybook/react'
import { appThemes } from '../../src/shared/config/theme/ThemeContext'
import { RouteDecorator } from '../../src/shared/config/storybook/decorators/RouteDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecotator'
import { StoreDecorator } from '../../src/shared/config/storybook/decorators/StoreDecorator'
import i18n from './i18next'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	i18n,
	locale: 'en',
	locales: {
		en: 'English',
		ua: 'Ukrainian',
	},
	layout: 'fullscreen'
}

addDecorator(StoreDecorator)
addDecorator(StyleDecorator)
addDecorator(RouteDecorator)
addDecorator(ThemeDecorator(appThemes.LIGHT))