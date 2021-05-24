import { baseUrl } from './fetchQuery';

export default function findUrl(url) {
  // const env = process.env.NODE_ENV;
  // return env === 'production' ? url : `${baseUrl}${url}`;
  return `${url}`;
}
