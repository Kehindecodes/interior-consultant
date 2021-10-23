// variables
const hamburgerMenu = document.querySelector('#hamburger_menu');
const closeBtn = document.querySelector('#close_menu');
const linkWrapper = document.querySelector('#link_wrapper');
const container = document.querySelector('.container');
const navLinks = document.querySelectorAll('li');
const main = document.querySelector('main');
const ul = document.querySelector('ul');
const navLinksWrapper = document.querySelector('#nav_wrapper');

// show nav links when the hambuger menu is clicked
hamburgerMenu.addEventListener('click', ShowLinks);
// show nav links
function ShowLinks(e) {
	e.preventDefault();
	// linkWrapper.classList.toggle('block');
	console.log(navLinksWrapper);
	if (linkWrapper.classList.contains('block')) {
		navLinksWrapper.classList.remove('sm-mobile:hidden');
		closeBtn.classList.replace('sm-mobile:hidden', 'sm-mobile:inline');
		hamburgerMenu.classList.replace('inline', 'hidden');
		main.classList.add('z-10');
		linkWrapper.classList.replace('sm-mobile:hidden', 'sm-mobile:block');
	} else {
		closeBtn.classList.add('hidden');
		hamburgerMenu.classList.replace('hidden', 'inline');
		linkWrapper.classList.add(' sm-mobile: w-screen', 'lg-tablet:w-full');
	}
}

//  hide nav links when the close btn is clicked
closeBtn.addEventListener('click', hideLinks);
// hide links
function hideLinks() {
	navLinksWrapper.classList.replace('sm-mobile:hidden', 'sm-mobile:block');
	closeBtn.classList.replace('sm-mobile:inline', 'sm-mobile:hidden');
	hamburgerMenu.classList.replace('hidden', 'inline');
	main.classList.remove('z-10');
	linkWrapper.classList.replace('sm-mobile:block', 'sm-mobile:hidden');
}
