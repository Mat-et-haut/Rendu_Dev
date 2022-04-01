
// 1ère
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// Montrer le menu

const navMenu = document.getElementById('nav-menu'),
	navToggle=document.getElementById('nav-toggle'),
	navClose=document.getElementById('nav-close')

// Menu déplié

if(navToggle){
	navToggle.addEventListener('click',() =>{
	navMenu.classList.add('show-menu')
	})
}

// Menu Caché
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}