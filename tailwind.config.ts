import type { Config } from 'tailwindcss'

export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		colors: {
			vin: '#914159',
			fond: '#F5EEE6',
			fond_vert: '#4AB8A1',
			vin_rouge: '#d63031',
			vin_blanc: '#d4d408',
			vin_rose: '#F8C3CD',
			vin_champagne: '#ffff00',
			bouteille: '#3a3a3a',
			bouteille_blanc: '#fefee2',
			bouteille_rose: '#fee7f0',
			bouteille_champagne: '#0f4d0f',
			gris: '#b2bec3',
			gris_fonce: '#2d3436',
		},
		extend: {
			boxShadow: {
				'card': '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
			}
		},
	},
	plugins: [],
} satisfies Config