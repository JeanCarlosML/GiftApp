import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import "animate.css"
export const GifExpertApp = () => {
  const data = ["Naruto"];
  const [categories, setcategories] = useState(data);

  return (
    <div className="container">
      <header className="header">
        <h2>GIPHY</h2>
      </header>
      <main className="main">
        <section className="main__buscador">
          <AddCategory /*Formulario*/ setCategories={setcategories} />
          <div className="items">
            {categories.map((category) => (
              <GifGrid key={category} category={category} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
