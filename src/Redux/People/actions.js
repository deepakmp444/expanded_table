export const FETCH_PEOPLE_REQUEST = "FETCH_PEOPLE_REQUEST";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const FETCH_PEOPLE_FAILURE = "FETCH_PEOPLE_FAILURE";

export const fetchPeople = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PEOPLE_REQUEST });
    try {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      // console.log("data:", data.results);
      dispatch({
        type: FETCH_PEOPLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PEOPLE_FAILURE,
        payload: error.message,
      });
    }
  };
};
