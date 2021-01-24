import React, { Fragment, useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import getGifs from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs();
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);
  return (
    <div className="item">
      <h3>{category}</h3>
      {loading ? "Cargando" : "Data cargada"}
      <div className="cards">
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </div>
    </div>
  );
};
