import { combineReducers } from "redux";
import {
  FETCH_DATA_SUCCESS,
  FETCH_ITEM_DETAIL_SUCCESS,
  FETCH_PAGINATION_DATA_SUCCESS,
} from "../actions/actionType";

const initialState = {
  data: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_PAGINATION_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_ITEM_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
