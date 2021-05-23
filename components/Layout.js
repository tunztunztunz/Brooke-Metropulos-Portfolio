import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from './Footer';

export default function Layout({ children, data, category = null }) {
  return (
    <div className="font-neue flex flex-col min-h-screen">
      <Head>
        <title>Brooke Metropulos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar data={data?.navbar} category={category} />
      <main className="flex-1 overflow-y-auto pt-16 pb-4 px-4  pt-4 mb-auto md:px-12 md:pt-24 3xl:container 3xl:mx-auto 3xl:px-20 3xl:pt-28">
        {children}
      </main>
      <Footer data={data?.footer} />
    </div>
  );
}
