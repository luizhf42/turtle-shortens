export const setShortenedLinks = (newLink: Object) => {
	const links = JSON.parse(localStorage.getItem("links"));
	const updatedLinksArray = [...links, newLink];

	localStorage.setItem("links", JSON.stringify(updatedLinksArray));
};
