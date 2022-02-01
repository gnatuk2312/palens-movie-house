import appendMovies from "./appendMovies";
import Pagination from 'tui-pagination';
import paginationSettings from './paginationSettings';
import { fetchPopular } from "./service/moviesAPI";

const paginationLoad = new Pagination('pagination1', paginationSettings());

function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -110);
		setTimeout(backToTop, 0);
	};
};

const loadMovies = () => {
	try {
		fetchPopular()
			.then(response => {
				//console.log(response);
				appendMovies(response.results)
			})
			.catch(e => {
				throw (e);
			})
	} catch (error) {
		alert(error.message);
	}

	paginationLoad.on('beforeMove', (e) => {
		backToTop();
		try {
			fetchPopular(e.page)
				.then(response => {
					//console.log(response);
					appendMovies(response.results)
				})
				.catch(e => {
					throw (e);
				})
		} catch (error) {
			alert(error.message);
		}
	});
}
export default loadMovies;