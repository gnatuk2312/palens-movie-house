export default class darkMode {
	constructor(triggerSelector) {
		this.trigger = document.querySelector(triggerSelector);
		this.el1 = document.querySelector('.header__categories-menu');
		this.els2 = document.querySelectorAll('.header__category');
		this.el3 = document.querySelector('.header__button');

	}



	toggleTrigger() {
		this.trigger.classList.toggle('is-dark')
		if (this.trigger.classList.contains('is-dark')) {
			this.trigger.children[1].classList.remove('visually-hidden');
			this.trigger.children[0].classList.add('visually-hidden');
		} else {
			this.trigger.children[1].classList.add('visually-hidden');
			this.trigger.children[0].classList.remove('visually-hidden');
		}
	}

	changeColors() {
		if (!this.trigger.classList.contains('is-dark')) {
			//---------------------------
			document.body.style.color = 'black';
			//---------------------------
			this.el1.children[1].classList.remove('dark-mode');
			this.el1.children[1].classList.add('light-mode');
			//---------------------------
			this.els2.forEach(el => {
				el.classList.remove('dark-mode');
				el.classList.add('light-mode');
			})
			//---------------------------
			this.el3.children[1].classList.remove('visually-hidden');
			this.el3.children[0].classList.add('visually-hidden');
		} else {
			//---------------------------
			document.body.style.color = 'white';
			//---------------------------
			this.el1.children[1].classList.add('dark-mode');
			this.el1.children[1].classList.remove('light-mode');
			//---------------------------
			this.els2.forEach(el => {
				el.classList.remove('light-mode');
				el.classList.add('dark-mode');
			})
			//---------------------------
			this.el3.children[1].classList.add('visually-hidden');
			this.el3.children[0].classList.remove('visually-hidden');
		}

	}

	init() {
		this.trigger.addEventListener('click', () => {
			this.toggleTrigger();
			this.changeColors();
		})

	}
}
