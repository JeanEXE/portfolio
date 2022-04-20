const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ["./src/**/*.{html,js,tsx,ts}"],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 18s linear infinite',
			},
			transitionProperty: {
				'width': 'width'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				black: '#0B0B0C',
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
