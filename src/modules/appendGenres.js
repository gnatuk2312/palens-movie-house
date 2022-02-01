import { fetchGenresList } from "./service/moviesAPI";

const genresList = document.querySelector('.header__categories');

const appendGenres = () => {

	//Загружаємо жанри в список жанрів 
	const loadGenres = (data) => {
		data.forEach(genre => {
			const genresLi = document.createElement('LI');
			genresLi.innerHTML = `
			<button class="header__category dark-mode" data-genre="${genre.id}">${genre.name}</button>
			`
			genresList.appendChild(genresLi);
		})
	}
	try {
		fetchGenresList()
			.then(data => {
				loadGenres(data.genres)
			})
			.catch(e => {
				throw (e);
			})
	} catch (error) {
		alert(error.message);
	}


}


export default appendGenres;

