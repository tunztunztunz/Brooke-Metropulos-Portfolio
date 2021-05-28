import { CloudinaryContext } from 'cloudinary-react';
import 'tailwindcss/tailwind.css';
import '../styles/styles.css';
import redirectUser from '../lib/redirectUser';
import { parseCookies } from 'nookies';

function MyApp({ Component, pageProps }) {
  return (
    <CloudinaryContext cloudName="ddiaabzu0">
      <Component {...pageProps} />
    </CloudinaryContext>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const jwt = parseCookies(ctx).jwt;

  if (!jwt) {
    if (ctx.pathname === '/dashboard') {
      redirectUser(ctx, '/login');
    }
  }
  return {
    pageProps,
  };
};

export default MyApp;
