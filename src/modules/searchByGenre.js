import fetchRequest from "./fetchRequest";
import appendMovies from "./appendMovies";
import Pagination from 'tui-pagination';
import paginationSettings from './paginationSettings';

const api_key = "api_key=37ddb2fc7c56da1b6488f77b0c18f898";
const url = "https://api.themoviedb.org/3";


const searchByGenre = () => {

	const genres = document.querySelector('.header__categories');

	genres.addEventListener('click', (e) => {

		if (e.target.tagName == "BUTTON") {
			const genreId = e.target.getAttribute('data-genre')
			const genre_url = url + '/discover/movie?' + api_key + '&language=en-US&sort_by=popularity.desc&page=1&with_genres=' + genreId + '&page=';
			try {
				fetchRequest(genre_url + '1')
					.then(response => {
						appendMovies(response.results);
					})
					.catch(e => {
						throw (e);
					})
			} catch (error) {
				alert(error);
			}
			if (false) {
				const paginationSearch = new Pagination('pagination1', paginationSettings());
				paginationSearch.on('beforeMove', (e) => {
					fetchRequest(genre_url + e.page)
						.then(response => {
							console.log(response);

							appendMovies(response.results)
						})
						.catch(e => {
							throw (e);
						})
				});
			}
		}
	})


}
export default searchByGenre;