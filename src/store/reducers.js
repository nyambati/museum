import {
  LOGIN_SUCCESS,
  FETCH_CHARTS_SUCCESS,
  FETCH_CHARTS_ERROR,
  CHANGE_VIEW_ICON,
  CHANGE_CHART_VIEW,
  FETCH_CHARTS_BY_VERSION_SUCCESS,
  FETCH_CHARTS_BY_VERSION_ERROR,
  UPLOAD_CHARTS_SUCCESS,
  SET_AUTH_TOKEN,
  REMOVE_AUTH_TOKEN,
  DELETE_CHART_SUCCESS,
  DELETE_CHART_ERROR
} from "./types";
import { token as getToken } from "./charts";
export const initialState = {
  token: getToken() || "",
  user: {},
  charts: [],
  errors: {},
  upload: {},
  chart: {
    keywords: [],
    sources: [],
    maintainers: [],
    versions: []
  },
  listView: false,
  viewIcon: "list_view"
};

export function token(state = initialState.token, action) {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return action.payload;
    case REMOVE_AUTH_TOKEN:
      return "";
    default:
      return state;
  }
}

export function errors(state = initialState.errors, action) {
  switch (action.type) {
    case FETCH_CHARTS_ERROR:
      return { ...state, charts: action.payload };
    case FETCH_CHARTS_BY_VERSION_ERROR:
      return { ...state, chart: action.payload };
    case DELETE_CHART_ERROR:
      return { ...state, chart: action.payload };
    default:
      return state;
  }
}

export function user(state = initialState.charts, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function charts(state = initialState.charts, action) {
  switch (action.type) {
    case FETCH_CHARTS_SUCCESS:
      return [...action.payload];

    case DELETE_CHART_SUCCESS:
      const idx = state.findIndex(
        chart => (chart.version = action.payload.version)
      );
      return [...state.slice(0, idx), ...state.slice(idx + 1, state.length)];
    default:
      return state;
  }
}

export function listView(state = initialState.listView, action) {
  switch (action.type) {
    case CHANGE_CHART_VIEW:
      return !state;
    default:
      return state;
  }
}

export function viewIcon(state = initialState.viewIcon, action) {
  switch (action.type) {
    case CHANGE_VIEW_ICON:
      if (state == "grid_on") return "list_view";
      if (state == "list_view") return "grid_on";
    default:
      return state;
  }
}

export function chart(state = initialState.chart, action) {
  switch (action.type) {
    case FETCH_CHARTS_BY_VERSION_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export function upload(state = initialState.upload, action) {
  switch (action.type) {
    case UPLOAD_CHARTS_SUCCESS:
      return { sucess: true, ...action.payload };
    default:
      return state;
  }
}
