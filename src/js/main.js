console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)

	let showNavigation = function(){
		console.log('sdrfghj')
		let homeScreen = document.querySelector('.primary-nav')
		homeScreen.classList.toggle('showing')
	}
// when user clicks hamburger
	// query for .hamburger
	let hamburgerMenu = document.querySelector('.hamburger')
	hamburgerMenu.addEventListener('click', showNavigation)
	// add event listener, make "click" call showNavigation fn
// primary nav appears 

	// in showNavigation() function
		// query for .primary-nav
		// add class 'showing' to it
