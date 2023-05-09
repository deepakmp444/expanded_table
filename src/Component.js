import React, { useEffect, useState } from "react";

function Component({ value }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFilmsData = async () => {
      const filmsData = await Promise.all(
        value.films.map((filmUrl) => fetch(filmUrl).then((res) => res.json()))
      );
      setData(filmsData);
    };

    fetchFilmsData();
  }, [value.films]);
  console.log("data:", data);
  return (
    <>
      <p>{!data && <p>Loading...</p>}</p>
      {data.map((value, index) => {
        return (
          <tr key={index}>
            <td>Movie Title: {value.title}</td>
            <td>Movie Director: {value.director}</td>
          </tr>
        );
      })}
    </>
  );
}

export default Component;
