import React from "react";
import ScrollReveal from "scrollreveal";

export const GifGridItem = ({ id, title, url }) => {
  ScrollReveal().reveal(".card", { delay: 2000 });
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
