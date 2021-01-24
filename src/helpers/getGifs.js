//URI = api.giphy.com/v1/gifs/search
//API KEY = bjp8BjN0IxUZLheJSQSi9rZCIKSdnI1Q
const getGifs = async (category) => {
  const API_KEY = "bjp8BjN0IxUZLheJSQSi9rZCIKSdnI1Q";
  const URI_GIF = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(
    category
  )}`;
  const resp = await fetch(URI_GIF, { method: "GET" });
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};

export default getGifs;
