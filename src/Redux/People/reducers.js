import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  people: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        loading: false,
        people: action.payload,
        error: "",
      };
    case FETCH_PEOPLE_FAILURE:
      return {
        loading: false,
        people: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
