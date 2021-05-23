import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { baseUrl, fetchQuery } from '../lib/fetchQuery';

export default function Home({ globalData, pageData }) {
  const { buttons } = pageData;

  return (
    <Layout data={globalData}>
      <section className="flex flex-wrap items-start justify-evenly h-full">
        {buttons &&
          buttons.map((button, index) => {
            return (
              <Link as={`${button.links.url}`} href="/[category]" key={button.id}>
                <a
                  className={`${
                    index === 1 ? 'self-end' : ''
                  } flex items-center justify-center mb-12 md:w-3/5 xl:w-2/5`}
                >
                  <h2
                    className={`text-${button.textColor} absolute z-10 font-gopher font-bold text-2xl md:text-4xl 2xl:text-5xl 3xl:text-6xl`}
                  >
                    {button.links.text}
                  </h2>
                  <Image src={`${button.svg.url}`} width={1065} height={600} />
                </a>
              </Link>
            );
          })}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const globalData = await fetchQuery('global');
  const pageData = await fetchQuery('homepage');
  return {
    props: {
      globalData,
      pageData,
    },
  };
}
