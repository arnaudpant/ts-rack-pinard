import type { Config } from 'tailwindcss'

export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		colors: {
			vin: '#914159',
			fond: '#F5EEE6',
			fond_vert: '#4AB8A1',
			vin_blanc: '#e9e37c',
			vin_rose: '#F8C3CD',
			vin_champagne: '#FDEE00',
			gris: '#b2bec3'
		},
		extend: {
			boxShadow: {
				'card': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
			}
		},
	},
	plugins: [],
} satisfies Config