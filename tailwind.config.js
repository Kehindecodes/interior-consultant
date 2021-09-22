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
				mobile: '391.06px',
				cardMobile: '300px',
				profileMob: '62.2px',
				tab: '600px',
			},
			height: {
				img: '586.53px',
				card: '189px',
				profile: '85px',
				mobile: '279.34px',
				cardMobile: '138px',
				profileMob: '52.68px',
			},
		},
		screens: {
			'sm-mobile': '320px',
			mobile: '360px',
			tablet: '768px',
			'lg-tablet': '1024px',
			laptop: '1280px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
