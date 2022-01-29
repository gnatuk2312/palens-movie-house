const getRatingColor = (vote) => {
	if (vote >= 7) {
		return "green"
	} else if (vote >= 4) {
		return "yellow"
	} else if (vote > 0) {
		return 'red'
	} else {
		return 'null'
	}
};
export default getRatingColor;