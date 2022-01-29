export default class darkMode {
	constructor(triggerSelector) {
		this.trigger = document.querySelector(triggerSelector);
		this.arrow = document.querySelector('.header__categories-menu .arrow');
		//-------------
		this.searchBtn = document.querySelector('.header__button');
		this.scrollBtn = document.querySelector('.scroll-arrow');
		this.closeBtn = document.querySelector('.modal__close');
	}
	toggleTrigger() {
		this.trigger.classList.toggle('is-dark')
		if (this.trigger.classList.contains('is-dark')) {
			this.trigger.children[1].classList.remove('is-hidden');
			this.trigger.children[0].classList.add('is-hidden');
		} else {
			this.trigger.children[1].classList.add('is-hidden');
			this.trigger.children[0].classList.remove('is-hidden');
		}
	}

	//------------------------
	toggleElement(element, selector) {
		element = document.querySelector(selector).classList.toggle('dark-mode');
	}
	toggleChildrenRemove(element, index) {
		element.children[index].classList.remove('visually-hidden');
	}
	toggleChildrenAdd(element, index) {
		element.children[index].classList.add('visually-hidden');
	}
	//------------------------

	changeColors() {
		this.toggleElement(this.header, '.header');
		this.toggleElement(this.headerTitle, '.header__title');
		this.toggleElement(this.headerInput, '.header__input');
		this.toggleElement(this.genre, '.header__genre');
		this.toggleElement(this.arrow, '.header__categories-menu .arrow');
		this.toggleElement(this.genresList, '.header__categories-wrapper');
		this.toggleElement(this.movies, '.movies');
		this.toggleElement(this.footer, '.footer');
		this.toggleElement(this.footerRights, '.footer__rights');
		this.toggleElement(this.footerMail, '.footer__mail');
		this.toggleElement(this.modal, '.modal');
		this.toggleElement(this.modalBody, '.modal__body');

		if (!this.trigger.classList.contains('is-dark')) {
			this.toggleChildrenRemove(this.searchBtn, 1);
			this.toggleChildrenAdd(this.searchBtn, 0);
			//-------------
			this.toggleChildrenRemove(this.scrollBtn, 1);
			this.toggleChildrenAdd(this.scrollBtn, 0);
			//-------------
			this.toggleChildrenRemove(this.closeBtn, 1);
			this.toggleChildrenAdd(this.closeBtn, 0);
		} else {
			this.toggleChildrenRemove(this.searchBtn, 0);
			this.toggleChildrenAdd(this.searchBtn, 1);
			//-------------
			this.toggleChildrenRemove(this.scrollBtn, 0);
			this.toggleChildrenAdd(this.scrollBtn, 1);
			//-------------
			this.toggleChildrenRemove(this.closeBtn, 0);
			this.toggleChildrenAdd(this.closeBtn, 1);
		}

		this.categories = document.querySelectorAll('.header__category');
		this.categories.forEach(item => {
			item.classList.toggle('dark-mode');
		})


	}

	init() {
		this.trigger.addEventListener('click', () => {
			this.toggleTrigger();
			this.changeColors();
		})

	}
}
