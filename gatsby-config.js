module.exports = {
  siteMetadata: {
    title: `A.D.`,
  },
  plugins: [
		`gatsby-plugin-react-helmet`,
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
  ],
}
