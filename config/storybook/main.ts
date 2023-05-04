import type { StorybookConfig } from '@storybook/react/types'

const config: StorybookConfig = {
	'stories': [
		'../../src/**/*.stories.@(js|jsx|ts|tsx)'
	],
	'addons': [
		'@storybook/addon-links',
		{
			name: '@storybook/addon-essentials',
			options: {
				backgrounds: false
			}
		},
		'@storybook/addon-interactions',
		'storybook-react-i18next',
		'storybook-addon-mock/register',
		'storybook-addon-themes'
	],
	'framework': '@storybook/react',
	'core': {
		'builder': '@storybook/builder-webpack5'
	},
}

module.exports = config