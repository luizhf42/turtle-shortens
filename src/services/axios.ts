import axios from "axios";

const key = "2eb19ec870d76d56559ee96fd5621a58571bbdff";

const api = axios.create({
	baseURL: "https://api-ssl.bitly.com/v4/",
	headers: {
		Authorization: `Bearer ${key}`,
	},
});

export default api;
