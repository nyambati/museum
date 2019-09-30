import 'babel-polyfill';
import axios from 'axios';
const apiUrl = process.env.CHARTMUSEUM_URI + '/api/charts';

export async function list() {
	try {
		const response = await axios.get(apiUrl);
		return Object.keys(response.data).map(chart => response.data[chart][0]);
	} catch (e) {
		throw e;
	}
}

export function findByName() {
	return {};
}
