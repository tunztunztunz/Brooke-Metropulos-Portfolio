import Layout from '../../components/Layout';
import Image from 'next/image';
import { baseUrl, fetchQuery } from '../../lib/fetchQuery';
import ReactMarkdown from 'react-markdown';

export default function About({ globalData, pageData }) {
  return (
    <Layout data={globalData}>
      <section className="grid grid-cols-2 h-full">
        <div className="z-10">
          <h1 className="text-2xl">About</h1>
          <ReactMarkdown>{pageData.text}</ReactMarkdown>
        </div>
        <div className=" absolute w-7/12 right-2">
          <Image
            src={`${baseUrl}${pageData.image.url}`}
            width={644}
            height={976}
            sizes="(max-width: 600px) 100vw, (max-width: 1023px) 53vw, 23vw"
          />
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const globalData = await fetchQuery('global');
  const pageData = await fetchQuery('about-page');

  return {
    props: {
      globalData,
      pageData,
    },
  };
}
