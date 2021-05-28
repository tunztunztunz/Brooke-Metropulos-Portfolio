import Layout from '../../components/Layout';
import CustomImage from '../../components/CustomImage';
import { fetchQuery } from '../../lib/fetchQuery';
import ReactMarkdown from 'react-markdown';

export default function About({ globalData, pageData }) {
  return (
    <Layout data={globalData}>
      <section className="grid grid-cols-2 h-full xl:flex xl:place-content-center xl:px-20">
        <div className="z-10 xl:w-2/5 xl:relative xl:left-10">
          <h1 className="text-2xl md:text-4xl md:mb-8 3xl:text-5xl">About</h1>
          <ReactMarkdown>{pageData.text}</ReactMarkdown>
        </div>
        <div className=" absolute w-7/12 right-2 md:right-12 xl:w-4/12 xl:relative xl:right-10">
          <CustomImage
            url={pageData.image.url}
            width={644}
            height={976}
            effect="blur:500"
            sizes="(max-width: 600px) 50vw, (max-width: 1023px) 53vw, 45vw"
            bgHeight={230}
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
