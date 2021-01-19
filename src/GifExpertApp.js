import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const data = ["One punch"];
  const [categories, setcategories] = useState(data);

  /* const handleAdd = () => {
    //setcategories([...categories,'HunterxHunter'])
    setcategories((cats) => [...cats, "HunterxHunter"]);
  }; */
  return (
    <Fragment>
      <h2>Gif Expert App</h2>
      <hr />
      <AddCategory setCategories={setcategories} />
      <ul>
        {categories.map((category) =>(<GifGrid key={category} category={category}/>) )}
      </ul>
    </Fragment>
  );
};
