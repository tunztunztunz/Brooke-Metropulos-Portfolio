import { CloudinaryContext } from 'cloudinary-react';
import 'tailwindcss/tailwind.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <CloudinaryContext cloudName="ddiaabzu0">
      <Component {...pageProps} />;
    </CloudinaryContext>
  );
}

export default MyApp;
