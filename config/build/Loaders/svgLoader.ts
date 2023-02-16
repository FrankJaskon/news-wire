import webpack from 'webpack'

export const svgLoader = (): webpack.RuleSetRule => ({
	test: /\.svg$/,
	use: ['@svgr/webpack'],
})