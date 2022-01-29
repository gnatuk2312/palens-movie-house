const appendModalPoster = (posterPath) => {
	const image_url = "https://image.tmdb.org/t/p/w500";

	if (posterPath.backdrop_path) {
		return image_url + posterPath.backdrop_path;
	} else if (posterPath.belongs_to_collection) {
		return image_url + posterPath.belongs_to_collection.backdrop_path;
	} else {
		return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png";
	}
}
export default appendModalPoster;