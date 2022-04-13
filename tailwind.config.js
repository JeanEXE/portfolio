const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ["./src/**/*.{html,js,tsx,ts}"],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				black: '#000',
				yellow: '#fcee0a',
				blue: '#00f0ff',
			},
		},

	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				// '.scrollbar-hide': {
				// 	/* IE and Edge */
				// 	'-ms-overflow-style': 'none',

				// 	/* Firefox */
				// 	'scrollbar-width': 'none',

				// 	/* Safari and Chrome */
				// 	'&::-webkit-scrollbar': {
				// 		display: 'none'
				// 	}
				// }
			})
		})
	],
}
