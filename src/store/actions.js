import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FETCH_CHARTS_SUCCESS,
  FETCH_CHARTS_ERROR,
  UPLOAD_CHARTS_SUCCESS,
  UPLOAD_CHARTS_ERROR,
  CHANGE_CHART_VIEW,
  CHANGE_VIEW_ICON,
  FETCH_CHARTS_BY_VERSION_SUCCESS,
  FETCH_CHARTS_BY_VERSION_ERROR,
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  DELETE_CHART_SUCCESS,
  DELETE_CHART_ERROR
} from "./types";

export const userLoginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  };
};

export const userLoginError = error => ({
  type: LOGIN_ERROR,
  payload: error
});

export const fetchChartsSuccess = charts => ({
  type: FETCH_CHARTS_SUCCESS,
  payload: charts
});

export const fetchChartsError = error => ({
  type: FETCH_CHARTS_ERROR,
  payload: error
});

export const uploadChartsSuccess = data => ({
  type: UPLOAD_CHARTS_SUCCESS,
  payload: data
});

export const uploadChartsError = error => ({
  type: UPLOAD_CHARTS_ERROR,
  payload: error
});

export const fetchChartByVersionSuccess = chart => ({
  type: FETCH_CHARTS_BY_VERSION_SUCCESS,
  payload: chart
});

export const fetchChartByVersionError = error => ({
  type: FETCH_CHARTS_BY_VERSION_ERROR,
  payload: error
});

export const deleteChartSuccess = chart => ({
  type: DELETE_CHART_SUCCESS,
  payload: chart
});

export const deleteChartError = error => ({
  type: DELETE_CHART_ERROR,
  payload: error
});

export const setAuthToken = token => ({
  type: SET_AUTH_TOKEN,
  payload: token
});

export const removeAuthToken = () => ({ type: REMOVE_AUTH_TOKEN });

export const changeChartView = () => ({ type: CHANGE_CHART_VIEW });

export const changeViewIcon = () => ({ type: CHANGE_VIEW_ICON });
