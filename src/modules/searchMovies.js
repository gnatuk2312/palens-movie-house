import appendMovies from "./appendMovies";
import { fetchPopular } from "./service/moviesAPI";
import { fetchSearch } from "./service/moviesAPI";

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
			try {
				fetchSearch(searchValue)
					.then(response => {
						if (response.results.length === 0) {
							alert(Error("Даних фільмів немає в базі даних :("));
						}
						appendMovies(response.results)
					})
					.catch(e => {
						throw (e);
					})
			} catch (error) {
				alert(error.message);
			}

		} else {
			try {
				fetchPopular()
					.then(response => {
						appendMovies(response.results)
					})
					.catch(e => {
						throw (e);
					})
			} catch (error) {
				alert(error.message);
			}

		}
	}
}

export default searchMovies;