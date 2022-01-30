import fetchRequest from "./fetchRequest";
import appendMovies from "./appendMovies";

const api_key = "api_key=37ddb2fc7c56da1b6488f77b0c18f898";
const url = "https://api.themoviedb.org/3";


//https://api.themoviedb.org/3
///discover/movie?
//api_key=37ddb2fc7c56da1b6488f77b0c18f898
//&language=en-US&sort_by=popularity.desc&page=1&with_genres=28

const searchByGenre = () => {

	const genres = document.querySelector('.header__categories');

	genres.addEventListener('click', (e) => {
		if (e.target.tagName == "BUTTON") {
			const genreId = e.target.getAttribute('data-genre')
			const genre_url = url + '/discover/movie?' + api_key + '&language=en-US&sort_by=popularity.desc&page=1&with_genres=' + genreId;
			fetchRequest(genre_url)
				.then(response => {
					appendMovies(response.results);
				})
		}
	})


}
export default searchByGenre;