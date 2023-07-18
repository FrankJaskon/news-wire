import { RouteDecorator } from '../../src/shared/config/storybook/decorators/RouteDecorator'
import { StoreDecorator } from '../../src/shared/config/storybook/decorators/StoreDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/decorators/SuspenseDecorator'
import { AppThemes } from '../../src/shared/config/theme/ThemeContext'

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
	layout: 'fullscreen',
	themes: {
		default: 'light',
		list: [
			{ name: 'light', class: AppThemes.LIGHT, color: '#ff8c00' },
			{ name: 'dark', class: AppThemes.DARK, color: '#15202b' },
			{ name: 'purple', class: AppThemes.PURPLE, color: '#ae12f6' },
		],
	},
}

export const decorators = [RouteDecorator, SuspenseDecorator, StoreDecorator({}), StyleDecorator]
