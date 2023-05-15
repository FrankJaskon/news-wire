import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			//
		},
		baseUrl: 'http://localhost:5173',
		env: {
			TEST_USER_ID: 9963726
		}
	},
	component: {
		setupNodeEvents(on, config) {
			//
		},
		devServer: {
			framework: 'react',
			bundler: 'webpack'
		},
		env: {
			TEST_USER_ID: 9963726
		}
	}
})