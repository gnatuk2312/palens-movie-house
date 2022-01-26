export default class showGenres {
	constructor(triggerSelector, listSelector, itemSelector) {
		this.trigger = document.querySelector(triggerSelector);
		this.list = document.querySelector(listSelector);
		this.items = document.querySelectorAll(itemSelector);
	}

	toggleList() {
		this.trigger.children[1].classList.toggle('active');
		if (this.trigger.children[1].classList.contains('active')) {
			this.list.classList.remove('visually-hidden');
		} else {
			this.list.classList.add('visually-hidden');
		}
	}

	itemClicked() {
		this.items.forEach(item => {
			item.addEventListener('click', () => {
				this.trigger.children[1].classList.remove('active');
				this.list.classList.add('visually-hidden');
			})
		})
	}

	init() {
		this.trigger.addEventListener('click', () => {
			this.toggleList();
			this.itemClicked();
		});
	}
}

