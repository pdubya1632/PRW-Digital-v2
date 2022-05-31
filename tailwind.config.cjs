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

	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		themes: [
		  {
			prwTheme1: {
			  primary: "#a991f7",
			  secondary: "#f6d860",
			  accent: "#37cdbe",
			  neutral: "#3d4451",
			  "base-100": "#F0F1F2",
			},
		  },
		  "dark",
		  "cupcake",
		],
	  },

};

module.exports = config;
