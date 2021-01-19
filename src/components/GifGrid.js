import React, { Fragment } from "react";

export const GifGrid = ({ category }) => {
  //URI = api.giphy.com/v1/gifs/search
  //API KEY = bjp8BjN0IxUZLheJSQSi9rZCIKSdnI1Q
  const getGifs = async () => {
    const API_KEY = "bjp8BjN0IxUZLheJSQSi9rZCIKSdnI1Q";
    const URI_GIF = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=Rick+an+Morty&limit=10`;
    const resp = await fetch(URI_GIF, { method: "GET" });
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id:img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })
    console.log(gifs)
  };
  getGifs()
  return (
    <Fragment>
      <li>{category}</li>
    </Fragment>
  );
};
