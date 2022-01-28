const fetchRequest = async (url) => {
	let response = await fetch(url);
	let data = await response.json();
	console.log(data);

	return data;
};

export default fetchRequest;