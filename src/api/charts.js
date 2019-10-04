import 'babel-polyfill';
import axios from 'axios';
const baseUrl = process.env.API_BASE_URL;
export async function login(email, password) {
	if (!email && !password) return;
	try {
		console.log(`${baseUrl}/api/auth/login`);
		const { data } = await axios.post(`${baseUrl}/api/auth/login`, { email, password });
		console.log(data);
		return data;
	} catch (error) {
		console.log(error.message);
		throw error;
	}
}
export async function list() {
	try {
		const { data } = await axios.get(`${baseUrl}/api/charts`);
		return data;
	} catch (e) {
		throw e;
	}
}

export function findByName() {
	return {};
}
