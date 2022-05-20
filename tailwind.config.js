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
			'2xl': '1536px'
		},
		extend: {
			fontFamily: {
				tomorrow: ["Tomorrow"],
			},
			keyframes: {
				rightToLeft: {
					'0%': {
						transform: 'translateX(98vw)'
					},
					'100%': {
						transform: 'translateX(-50vw)'
					}
				},
				fadeInUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0px)'
					},
				},
				slideLeft: {
					'0%': {
						transform: 'translateX(-80vw)'
					},
					'100%': {
						transform: 'translateX(0vw)'
					},
				}
			},
			animation: {
				'spin-slow': 'spin 18s linear infinite',
				'scrollzada': 'rightToLeft 10s infinite linear',
				'fade-in-up': 'fadeInUp 0.5s ease-in',
				'slide-left': 'slideLeft 0.6s ease-in'
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
				unselected: '#303030e0'
			},
		},

	},
	plugins: [
		require('@tailwindcss/line-clamp'),
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
