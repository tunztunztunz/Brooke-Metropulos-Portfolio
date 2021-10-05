import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { baseUrl, fetchQuery } from '../lib/fetchQuery';
import findUrl from '../lib/findUrl';
import CustomImage from '../components/CustomImage';

export default function Home({ globalData, pageData }) {
  const { buttons } = pageData;
  console.log(pageData.image.url);
  return (
    <Layout data={globalData}>
      {/* <section className="flex flex-wrap items-start justify-evenly h-full"> */}
      {/* This following section is the temp section tag/class until our site is turned on. */}
      <section className="flex flex-col items-center justify-center h-full text-lg font-gopher font-bold  md:text-4xl  md:mr-auto xl:text-4xl 2xl:text-5xl 3xl:text-6xl text-red">
        <h1 className="">THIS SITE IS UNDER CONSTRUCTION!</h1>
        <div className="mx-auto w-full md:w-7/12 xl:w-2/5 xl:-ml-0 xl:-mr-0">
          <CustomImage
            url={pageData.image.url}
            width={698}
            height={666}
            bgHeight={91}
            effect={'blur:500'}
            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 33vw, 33vw"
          />
        </div>

        {/* {buttons &&
          buttons.map((button, index) => {
            const url = findUrl(button.svg.url);
            const textColor = `text-${button.textColor}`;
            return (
              <Link as={`${button.links.url}`} href="/[category]" key={button.id}>
                <a
                  className={`${
                    index === 1 ? 'self-end' : ''
                  } flex items-center justify-center mb-12 md:w-3/5 xl:w-2/5`}
                >
                  <h2
                    className={`${textColor} absolute z-10 font-gopher font-bold text-2xl md:text-4xl 2xl:text-5xl 3xl:text-6xl`}
                  >
                    {button.links.text}
                  </h2>
                  <Image src={url} width={1065} height={600} priority />
                </a>
              </Link>
            );
          })} */}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const globalData = await fetchQuery('global');
  const pageData = await fetchQuery('contact-page');
  return {
    props: {
      globalData,
      pageData,
    },
  };
}
