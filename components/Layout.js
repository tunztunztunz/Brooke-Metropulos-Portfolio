import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from './Footer';

export default function Layout({ children, data, category = null }) {
  return (
    <div className="font-neue flex flex-col h-screen">
      <Head>
        <title>Brooke Metropulos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar data={data?.navbar} category={category} />
      <main className="py-16 px-4 md:px-20 md:py-24 mb-auto">{children}</main>
      <Footer data={data?.footer} />
    </div>
  );
}
