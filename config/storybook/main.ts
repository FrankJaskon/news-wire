import type { StorybookConfig } from '@storybook/react/types'

const config: StorybookConfig = {
	'stories': [
		'../../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	'addons': [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-react-i18next'
	],
	'framework': '@storybook/react',
	'core': {
		'builder': '@storybook/builder-webpack5'
	}
}

module.exports = config