import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople } from "./Redux/People/actions";
import { fetchFilms } from "./Redux/Films/actions";
import Tablerow from "./table/Tablerow";

function App() {
  const dispatch = useDispatch();
  const people = useSelector(
    (state) => state.reducer.people && state.reducer.people.results
  );
  const [shortData, setShortData] = useState([]);
  const [isHeight, setIsHeight] = useState(false);
  const [isMass, setIsMass] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);

  useEffect(() => {
    setShortData(people);
  }, [people]);

  useEffect(() => {
    setShortData(people);
  }, [people]);
  console.log("people:", people);

  const shortByHeight = () => {
    if (isHeight) {
      let data = people.sort((a, b) => a.mass - b.mass);
      setShortData(data);
    } else {
      let data = people.sort((a, b) => b.mass - a.mass);
      setShortData(data);
    }
    setIsHeight(!isHeight);
  };

  const shortByMass = () => {
    if (isMass) {
      let data = people.sort((a, b) => a.mass - b.mass);
      setShortData(data);
    } else {
      let data = people.sort((a, b) => b.mass - a.mass);
      setShortData(data);
    }
    setIsMass(!isMass);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterResults(event.target.value);
    if (event.target.value === "") {
      setShortData(people);
    }
  };

  const filterResults = (searchTerm) => {
    const results = shortData.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setShortData(results);
  };

  return (
    <div className="container">
      {people ? (
        <table class="table">
          <thead>
            <th></th>
            <th>
              <div className="d-flex">
                <div>Name</div>
                <div className="ms-3">
                  <input
                    type="text"
                    className="form-control"
                    id="namesearch"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </th>
            <th>
              Height{" "}
              {isHeight ? (
                <span onClick={shortByHeight}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-down-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </span>
              ) : (
                <span onClick={shortByHeight}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-up-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                    />
                  </svg>
                </span>
              )}
            </th>
            <th>
              Mass{" "}
              {isMass ? (
                <span onClick={shortByMass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-down-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </span>
              ) : (
                <span onClick={shortByMass}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-up-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                    />
                  </svg>
                </span>
              )}
            </th>
          </thead>
          {shortData?.map((value, index) => {
            return <Tablerow key={index} value={value} />;
          })}
        </table>
      ) : (
        <p className="text-success">Loading...</p>
      )}
    </div>
  );
}

export default App;
