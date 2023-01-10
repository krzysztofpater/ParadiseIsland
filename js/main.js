const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");

// burger
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");

// current year
const footerYear = document.querySelector(".footer__year");

const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	speed: 300,
	loop: true,
	slidesPerView: 1,
	autoplay: {
		delay: 2000,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
});

// function handleNav() {
// 	nav.classList.toggle("nav--active")
// }

const handleNav = () => {
	nav.classList.toggle("nav--active");
	document.body.classList.toggle('sticky-body');

	navBtnBars.classList.remove('black-bars-color');

	allNavItems.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
			document.body.classList.remove('sticky-body');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle("nav-items-animation");
		item.style.animationDelay = "." + delayTime + "s";
		delayTime++;
	});
};

// change burger icon color
const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach(section => {
		
		if(section.classList.contains('white-section') &&  section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') &&  section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	}) 
}

// current year function
const handleCurentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurentYear();

navBtn.addEventListener('click', handleNav);

window.addEventListener("scroll", handleObserver);