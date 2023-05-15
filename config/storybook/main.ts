import type { StorybookConfig } from '@storybook/types'
const config: StorybookConfig = {
	stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		{
			name: '@storybook/addon-essentials',
			options: {
				backgrounds: false,
			},
		},
		'@storybook/addon-interactions',
		'storybook-react-i18next',
		'storybook-addon-mock',
		'storybook-addon-themes',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	core: {},
	docs: {
		autodocs: false,
	},
}
module.exports = config
