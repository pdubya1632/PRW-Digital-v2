const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  
	theme: {
	  extend: {
		typography: {
		  DEFAULT: {
			css: {
			  maxWidth: null,
			},
		  },
		},
	  },
	},
  
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	],
  }
  
  module.exports = config

// module.exports = {
// 	daisyui: {
// 	  themes: ["light", "dark", "cmyk"],
// 	},
//   }