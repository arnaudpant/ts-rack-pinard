import type { Config } from 'tailwindcss'

export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		colors: {
			vin:'#914159',
			fond:'#F5EEE6',
			fond_vert: '#4AB8A1',
			vin_blanc: '#e9e37c',
			vin_rose: '#F8C3CD',
			vin_champagne: '#FDEE00',
		},
		extend: {},
	},
	plugins: [],
} satisfies Config