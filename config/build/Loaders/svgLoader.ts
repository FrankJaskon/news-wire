import webpack from 'webpack'

export const svgLoader = (): webpack.RuleSetRule => ({
	test: /\.svg$/,
	use: [
		{
			loader: '@svgr/webpack',
			options: {
				svgoConfig: {
					icon: true,
					plugins: [
						{
							name: 'convertColors',
							params: {
								currentColor: true,
							},
						},
					],
				},
			},
		},
	],
})
