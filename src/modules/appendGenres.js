import fetchRequest from "./fetchRequest";

const api_key = "api_key=37ddb2fc7c56da1b6488f77b0c18f898";
const url = "https://api.themoviedb.org/3";
const allGenres_url = url + '/genre/movie/list?' + api_key + '&language=uk';

const genresList = document.querySelector('.header__categories');

const appendGenres = () => {

	//Загружаємо жанри в список жанрів 
	const loadGenres = (data) => {
		data.forEach(genre => {
			const genresLi = document.createElement('LI');
			const genresButton = document.createElement('BUTTON');
			genresButton.classList.add('header__category');
			genresButton.classList.add('dark-mode');
			genresLi.appendChild(genresButton);
			genresButton.innerHTML = `
			<li><button class="header__category dark-mode">${genre.name}</button></li>
			`
			genresList.appendChild(genresLi);
		})
	}

	fetchRequest(allGenres_url)
		.then(data => {
			loadGenres(data.genres)
		})

}


export default appendGenres;

