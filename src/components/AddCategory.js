import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(window);
    setCategories((categories) => [inputValue, ...categories]);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search all the GIFS and Stickers"
      />
      <div className="form__search" onClick={handleSubmit}>
        <FontAwesomeIcon
          icon={faSearch}
          color="white"
          flip="horizontal"
          size="2x"
        />
      </div>
    </form>
  );
};
