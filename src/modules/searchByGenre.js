import appendMovies from "./appendMovies";
import { fetchGenre } from "./service/moviesAPI";

const searchByGenre = () => {

	const genres = document.querySelector('.header__categories');

	genres.addEventListener('click', (e) => {

		if (e.target.tagName == "BUTTON") {
			const genreId = e.target.getAttribute('data-genre')
			try {
				fetchGenre(genreId)
					.then(response => {
						appendMovies(response.results);
					})
					.catch(e => {
						throw (e);
					})
			} catch (error) {
				alert(error);
			}
		}
	})
}
export default searchByGenre;