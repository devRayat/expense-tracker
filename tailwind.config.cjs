module.exports = {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			boxShadow: {
				primary: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)'
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
