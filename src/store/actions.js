import { createAction } from '@reduxjs/redux-toolkit';
export const userLoginSuccess = createAction('LOGIN_SUCCESS');

export const userLoginError = createAction('LOGIN_ERROR');

export const fetchChartsSuccess = createAction('FETCH_CHARTS_SUCCESS');

export const fetchChartsError = createAction('FETCH_CHARTS_ERROR');

export const uploadChartsSuccess = createAction('UPLOAD_CHARTS_SUCCESS');

export const uploadChartsError = createAction('UPLOAD_CHARTS_ERROR');

export const fetchChartByVersionSuccess = createAction('FETCH_CHARTS_BY_VERSION_SUCCESS');
export const fetchChartByVersionError = createAction('FETCH_CHARTS_BY_VERSION_ERROR');

export const setAuthToken = createAction('SET_AUTH_TOKEN');

export const removeAuthToken = createAction('REMOVE_AUTH_TOKEN');

export const changeChartView = createAction('CHANGE_CHART_VIEW');

export const changeViewIcon = createAction('CHANGE_VIEW_ICON');
