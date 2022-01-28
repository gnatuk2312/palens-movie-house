import fetchRequest from "./fetchRequest";
import appendMovies from "./appendMovies";

const api_key = "api_key=37ddb2fc7c56da1b6488f77b0c18f898";
const url = "https://api.themoviedb.org/3";
const popular_url = url + "/discover/movie?sort_by=popularity.desc&" + api_key;

const loadMovies = () => {

	fetchRequest(popular_url)
		.then(response => {
			appendMovies(response)
		})
		.catch(e => {
			throw (e);
		})
}

export default loadMovies;