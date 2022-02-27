export const get = async (url, payload) => {
	const axios = require("axios");
	const response = await axios.get(url);
	if (response.status === 200) {
		return response.data;
	}
};
