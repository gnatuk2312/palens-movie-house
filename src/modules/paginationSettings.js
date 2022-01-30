const paginationSettings = () => {
	const settings = {
		totalItems: 499,
		itemsPerPage: 1,
		visiblePages: 5,
		centerAlign: true,
		firstItemClassName: 'tui-first-child',
		lastItemClassName: 'tui-last-child',
		template: {
			currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
			moveButton:
				'<a href="#" class="tui-page-btn tui-{{type}}">' +
				'<span class="tui-ico-{{type}}">{{type}}</span>' +
				'</a>',
			disabledMoveButton:
				'<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
				'<span class="tui-ico-{{type}}">{{type}}</span>' +
				'</span>',
			moreButton:
				'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
				'<span class="tui-ico-ellip">...</span>' +
				'</a>',
		},
	}
	return settings;
}
export default paginationSettings;