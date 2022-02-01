const scrollToTop = () => {

	const button = document.querySelector('.scroll-arrow');

	window.addEventListener('scroll', () => {
		let scrolled = window.pageYOffset;
		let coords = document.documentElement.clientHeight;
		if (scrolled < coords) {
			button.classList.add('visually-hidden');

		};
		if (scrolled > coords) {
			button.classList.remove('visually-hidden');
		};
	});

	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -110);
			setTimeout(backToTop, 0);
		};
	};

	button.addEventListener('click', backToTop);
};
export default scrollToTop;