import 'babel-polyfill';
import axios from 'axios';

axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${token()}`;

export function token(token) {
	if (!token) {
		return localStorage.getItem('_access_token');
	}
	return localStorage.setItem('_access_token', token);
}
export async function login(email, password) {
	if (!email && !password) return;
	try {
		const { data } = await axios.post('api/auth/login', { email, password });
		return data;
	} catch (error) {
		console.log(error.message);
		throw error;
	}
}
export async function list() {
	try {
		const { data } = await axios.get('api/charts');
		return data;
	} catch (e) {
		throw e;
	}
}

export function findByName() {
	return {};
}
