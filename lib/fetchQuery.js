const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const env = process.env.NODE_ENV;
async function fetchQuery(path, params = null) {
  let url;
  if (params !== null) {
    url = `${baseUrl}/${path}/${params}`;
    console.log(baseUrl);
  } else {
    url = `${baseUrl}/${path}`;
    console.log(baseUrl);
  }

  const response = await fetch(`${url}`);
  const data = await response.json();
  return data;
}
export { baseUrl, fetchQuery };
