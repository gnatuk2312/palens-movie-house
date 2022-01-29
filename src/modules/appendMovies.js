import appendPoster from "./appendPoster";
import getRatingColor from "./getRatingColor";
const appendMovies = (response) => {

	const moviesWrapper = document.querySelector('.movies__items');

	const showMovies = (data) => {

		moviesWrapper.innerHTML = ``;
		data.forEach(movie => {
			const movieCard = document.createElement("LI");
			movieCard.classList.add('movies__item');
			movieCard.setAttribute('data-id', movie.id);
			movieCard.innerHTML = `
				
					<div class="movies__poster">
						<img src="${appendPoster(movie.poster_path)}" alt="Картинка" class="movies__image">
					</div>
					<h3 class="movies__title">${movie.title}</h3>
					<div class="movies__rating ${getRatingColor(movie.vote_average)}"><span>${movie.vote_average}</span></div>
				`
			moviesWrapper.appendChild(movieCard);
		})
	}

	showMovies(response);
}
export default appendMovies;