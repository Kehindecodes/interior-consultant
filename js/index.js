// variables
const hamburgerMenu = document.querySelector('#hamburger_menu');
const closeBtn = document.querySelector('#close_menu');
const linkWrapper = document.querySelector('#link_wrapper');
const container = document.querySelector('.container');
const navLinks = document.querySelectorAll('li');
const main = document.querySelector('main');
const ul = document.querySelector('ul');
// show nav links when the hambuger menu is clicked

// show nav links
function ShowLinks() {
	linkWrapper.classList.add(
		'inline',
		'bg-extend-primary',
		'h-screen',
		'z-20',
		'absolute',
		'w-screen',
		'top-0',
		'left-0',
	);
	closeBtn.classList.add(
		'sm-mobile:inline ',
		'lg-tablet:hidden',
		'cursor-pointer',
		'absolute',
		'right-4',
		'top-3',
	);
	main.className('z-10');
	container.className('sm-mobile:px-0');
}
//  hide nav links when the close btn is clicked
function hideLinks() {}
