import 'babel-polyfill';
import axios from 'axios';
const apiUrl = process.env.API_BASE_URL + '/charts';
export async function list() {
	try {
		const response = await axios.get(apiUrl);
		return response.data;
	} catch (e) {
		throw e;
	}
}

export function findByName() {
	return {};
}
