module.exports = {
  plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		'gatsby-plugin-svg-sprite',
		'gatsby-transformer-typescript-css-modules',
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
  ],
}
