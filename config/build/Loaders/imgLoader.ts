import webpack from 'webpack'

export const imgLoader = (): webpack.RuleSetRule => ({
	test: /\.(png|jpg|jpeg|gif)$/i,
	type: 'asset/resource',
})