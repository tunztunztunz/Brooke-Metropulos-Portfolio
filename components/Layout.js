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
      <main className="py-16 px-4 mb-auto md:px-12 md:py-24 3xl:container 3xl:mx-auto 3xl:px-20 3xl:py-28">
        {children}
      </main>
      <Footer data={data?.footer} />
    </div>
  );
}
