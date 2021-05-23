const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
async function fetchQuery(path, params = null) {
  let url;
  if (params !== null) {
    url = `https://thawing-escarpment-59373.herokuapp.com/${path}/${params}`;
  } else {
    url = `https://thawing-escarpment-59373.herokuapp.com/${path}`;
  }

  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}
export { baseUrl, fetchQuery };
