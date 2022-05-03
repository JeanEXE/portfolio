const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ["./src/**/*.{html,js,tsx,ts}"],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'xx': '1430px',
			'2xl': '1536px',
			'desktop': '1280px',
			// 'tablet': '640px',
			// 	// => @media (min-width: 640px) { ... }

			// 	'laptop': '1024px',
			// 	// => @media (min-width: 1024px) { ... }
		},
		extend: {
			keyframes: {
				rightToLeft: {
					'0%': {
						transform: 'translateX(98vw)'
					},
					'100%': {
						transform: 'translateX(-50vw)'
					}
				},
			},
			animation: {
				'spin-slow': 'spin 18s linear infinite',
				'scrollzada': 'rightToLeft 10s infinite linear'
			},
			transitionProperty: {
				'width': 'width'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				black: '#0B0B0C',
				blackSec: '#121212',
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
