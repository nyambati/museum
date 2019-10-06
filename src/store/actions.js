import { LOGIN_SUCCESS, LOGIN_ERROR, FETCH_CHARTS_ERROR, UPLOAD_CHARTS_SUCCESS, UPLOAD_CHARTS_ERROR } from './types';

export const userLoginSuccess = (user) => {
	return {
		type: LOGIN_SUCCESS,
		payload: user
	};
};

export const userLoginError = (error) => ({
	type: LOGIN_ERROR,
	payload: error
});

export const fetchChartsSuccess = (charts) => ({
	type: FETCH_CHARTS_SUCCESS,
	payload: charts
});

export const fetchChartsError = (error) => ({
	type: FETCH_CHARTS_ERROR,
	payload: error
});

export const uploadChartsSuccess = (error) => ({
	type: UPLOAD_CHARTS_SUCCESS,
	payload: error
});

export const uploadChartsError = (error) => ({
	type: UPLOAD_CHARTS_ERROR,
	payload: error
});
