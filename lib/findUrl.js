import { baseUrl } from './fetchQuery';
// meant to change db depending on env but may not need this anymore.
export default function findUrl(url) {
  // const env = process.env.NODE_ENV;
  // return env === 'production' ? url : `${baseUrl}${url}`;
  return `${url}`;
}
