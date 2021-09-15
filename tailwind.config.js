const colors = require('tailwindcss/colors');
module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			extend: {
				primary: '#181719',
				secondary: '#ffffff',
				title: '#828282',
			},
		},
		fontFamily: {
			crimson: ['Crimson Pro', 'serif'],
			mont: ['Montserrat', 'sans - serif'],
		},
		extend: {
			width: {
				img: '821.11px',
				card: '410px',
				profile: '85px',
			},
			height: {
				img: '586.53px',
				card: '189px',
				profile: '85px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
