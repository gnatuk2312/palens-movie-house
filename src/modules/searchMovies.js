import fetchRequest from "./fetchRequest";
import appendMovies from "./appendMovies";

const api_key = "api_key=37ddb2fc7c56da1b6488f77b0c18f898";
const url = "https://api.themoviedb.org/3";
const search_url = url + '/search/movie?' + api_key;

const searchMovies = () => {

	const searchForm = document.querySelector('.header__search');
	const searchInput = document.querySelector('.header__input');

	searchForm.addEventListener('submit', (e) => {
		e.preventDefault();
		searchRequest();
	})

	const searchRequest = () => {
		const searchValue = searchInput.value;
		if (searchValue) {
			fetchRequest(search_url + '&query=' + searchValue)
				.then(response => {
					appendMovies(response)
				})
				.catch(e => {
					throw (e)
				})
		}

	}

}

export default searchMovies;