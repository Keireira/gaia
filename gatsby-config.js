const isProd = process.env.NODE_ENV === 'production'

const devPlugins = [
	'gatsby-transformer-typescript-css-modules',
]

const prodPlugins = [

]

const commonPlugins = [
	`gatsby-plugin-typescript`,
	{
		resolve: 'gatsby-plugin-favicon',
		options: {
			lang: 'en-US',
			logo: './src/assets/favicon.png',

			icons: {
				android: false,
				appleIcon: false,
				appleStartup: false,
				coast: false,
				favicons: true,
				firefox: false,
				yandex: false,
				windows: false
			}
		},
	},
]

module.exports = {
	plugins: isProd ? [
		...commonPlugins,
		...prodPlugins,
	] : [
		...commonPlugins,
		...devPlugins,
	]
}
