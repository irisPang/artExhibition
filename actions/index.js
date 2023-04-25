import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_SUCCESS,
  FETCH_ITEM_DETAIL_SUCCESS,
  FETCH_PAGINATION_DATA_SUCCESS,
} from "./actionType";

const API_URL = "https://api.artic.edu/api/v1";

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchPaginationSuccess = (data) => ({
  type: FETCH_PAGINATION_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (data) => ({
  type: FETCH_DATA_FAILURE,
  payload: data,
});

export const fetchItemDetailSuccess = (data) => ({
  type: FETCH_ITEM_DETAIL_SUCCESS,
  payload: data,
});

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/artworks`)
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchPaginationData = (url) => {
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        dispatch(fetchPaginationSuccess(response.data));
      })
      .catch((error) => {
        console.log("error", error.response);
      });
  };
};

export const fetchItemData = (id) => {
  return (dispatch) => {
    axios
      .get(`${API_URL}/artworks/${id}`)
      .then((response) => {
        dispatch(fetchItemDetailSuccess(response.data));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
