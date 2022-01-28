import './sass/main.scss';
import consoles from './modules/console'
import showGenres from './modules/showGenres';
import darkMode from './modules/darkMode';
import scrollToTop from './modules/scrollToTop';
window.addEventListener('DOMContentLoaded', () => {
	consoles();
	new showGenres(".header__categories-menu", ".header__categories-wrapper", '.header__category').init();
	new darkMode(".header__color-theme").init();
	scrollToTop();
});
