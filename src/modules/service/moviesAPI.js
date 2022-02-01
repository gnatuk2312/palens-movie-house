const API_KEY = "api_key=37ddb2fc7c56da1b6488f77b0c18f898";
const URL = "https://api.themoviedb.org/3";

async function fetchRequest(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw Error("Проблема з доступом до бази даних")
		}
		const data = await response.json();

		return data;
	}
	catch (error) {
		throw error;
	}
};

export function fetchPopular(page = 1) {
	const popular_url = URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY + '&language=uk&query=get&page=' + page;
	return fetchRequest(popular_url);
};

export function fetchSearch(searchValue) {
	const search_url = URL + '/search/movie?' + API_KEY + '&query=' + searchValue;
	return fetchRequest(search_url);

};

export function fetchGenre(genreId) {
	const genre_url = URL + '/discover/movie?' + API_KEY + '&language=en-US&sort_by=popularity.desc&page=1&with_genres=' + genreId + '&page=1';
	return fetchRequest(genre_url);
}

export function fetchGenresList() {
	const allGenres_url = URL + '/genre/movie/list?' + API_KEY + '&language=uk';
	return fetchRequest(allGenres_url);
}

export function fetchModal(movieId) {
	const movie_url = URL + '/movie/' + movieId + '?' + API_KEY + '&language=uk&external_source=imdb_id';
	return fetchRequest(movie_url);
}