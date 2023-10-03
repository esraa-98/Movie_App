import { GET_RECOMMEND_LIST } from "./../action/recommendation";
import { GET_MOVIESS_LIST } from "./../action/moviesListM";

const INITIAL_STATE = {
  list: [],
  details: {},
};

export default function moviesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MOVIESS_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case GET_RECOMMEND_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}
