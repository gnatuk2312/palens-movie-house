import './sass/main.scss';
import consoles from './modules/console'
import showGenres from './modules/showGenres';
import darkMode from './modules/darkMode';
import scrollToTop from './modules/scrollToTop';
import loadMovies from './modules/loadMovies';
import searchMovies from './modules/searchMovies';
import appendGenres from './modules/appendGenres';
import showModal from './modules/modal';
import searchByGenre from './modules/searchByGenre';

window.addEventListener('DOMContentLoaded', () => {
	consoles();
	new showGenres(".header__categories-menu", ".header__categories-wrapper", '.header__category').init();
	new darkMode(".header__color-theme").init();
	scrollToTop();
	loadMovies();
	searchMovies();
	searchByGenre();
	appendGenres();
	showModal();
});
