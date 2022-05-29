const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			}
		}
	},

	daisyui: {
		themes: ['light', 'dark', 'cmyk']
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
