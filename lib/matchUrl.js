export default function matchUrl(url) {
  return url.match(/[^\/]*$/)[0];
}
