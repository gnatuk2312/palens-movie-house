import fetchRequest from "./fetchRequest";

const api_key = "api_key=37ddb2fc7c56da1b6488f77b0c18f898";
const url = "https://api.themoviedb.org/3";
const image_url = "https://image.tmdb.org/t/p/w500";
const search_url = url + '/search/movie?' + api_key;
const searchMovies = () => {

	const searchForm = document.querySelector('.header__search');
	const searchInput = document.querySelector('.header__input');

	const moviesWrapper = document.querySelector('.movies__items');

	const getRatingColor = (vote) => {
		if (vote >= 7) {
			return "green"
		} else if (vote >= 4) {
			return "yellow"
		} else if (vote < 4) {
			return 'red'
		}
	};

	const showMovies = (data) => {

		moviesWrapper.innerHTML = ``;
		data.forEach(movie => {
			const movieCard = document.createElement("ARTICLE");
			movieCard.classList.add('movies__item');
			movieCard.innerHTML = `
				
					<div class="movies__poster">
						<img src="${image_url + movie.poster_path}" alt="Картинка" class="movies__image">
					</div>
					<h3 class="movies__title">${movie.title}</h3>
					<ul class="movies__genres">
						<li class="movies__genre">Мультфільм</li>
						<li class="movies__genre">Комедія</li>
						<li class="movies__genre">Пригоди</li>
					</ul>
					<div class="movies__rating ${getRatingColor(movie.vote_average)}"><span>${movie.vote_average}</span></div>
				`

			moviesWrapper.appendChild(movieCard);
		})
	};

	searchForm.addEventListener('click', (e) => {
		e.preventDefault();
		searchRequest();
	})

	const searchRequest = () => {
		const searchValue = searchInput.value;
		if (searchValue) {
			fetchRequest(search_url + '&query=' + searchValue)
				.then(response => {
					console.log(response);

					showMovies(response)
				})
				.catch(e => {
					throw (e)
				})
		}

	}

}

export default searchMovies;