import React, { useState } from "react";
import Component from "../Component";

function Tablerow({ value }) {
  const [showFilms, setShowFilms] = useState(false);
  const handleShowFilms = () => {
    setShowFilms(!showFilms);
  };

  return (
    <tbody>
      <tr>
        <td>
          <button className="btn btn-primary" onClick={handleShowFilms}>
            Expand
          </button>
        </td>
        <td>{value.name}</td>
        <td>{value.height}</td>
        <td>{value.mass}</td>
      </tr>
      {showFilms && <Component value={value} />}
    </tbody>
  );
}

export default Tablerow;
