import fetchRequest from "./fetchRequest";
import appendMovies from "./appendMovies";
import Pagination from 'tui-pagination';
import paginationSettings from './paginationSettings';

const api_key = "api_key=37ddb2fc7c56da1b6488f77b0c18f898";
const url = "https://api.themoviedb.org/3";
const popular_url = url + "/discover/movie?sort_by=popularity.desc&" + api_key + '&language=uk&query=get&page=';

const paginationLoad = new Pagination('pagination1', paginationSettings());

const loadMovies = () => {
	fetchRequest(popular_url + '1')
		.then(response => {
			console.log(response);
			appendMovies(response.results)

		})
		.catch(e => {
			throw (e);
		})

	paginationLoad.on('beforeMove', (e) => {
		fetchRequest(popular_url + e.page)
			.then(response => {
				console.log(response);

				appendMovies(response.results)
			})
			.catch(e => {
				throw (e);
			})
	});



}

export default loadMovies;