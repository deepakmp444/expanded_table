import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  films: [],
  error: "",
  name:[]
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        loading: false,
        films: action.payload,
        error: "",
      };
    case FETCH_FILMS_FAILURE:
      return {
        loading: false,
        films: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default filmsReducer;
