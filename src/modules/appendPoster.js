const appendPoster = (posterPath) => {
	const image_url = "https://image.tmdb.org/t/p/w500";

	if (posterPath) {
		return image_url + posterPath;
	} else {
		return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png";
	}
}
export default appendPoster;