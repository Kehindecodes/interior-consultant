const colors = require('tailwindcss/colors');
module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			extend: {
				primary: '#181719',
				secondary: '#ffffff',
			},
		},
		fontFamily: {
			crimson: ['Crimson Pro', 'serif'],
			mont: ['Montserrat', 'sans - serif'],
		},
		extend: {
			width: {
				img: '821.11px',
			},
			height: {
				img: '586.53px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
