import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import { baseUrl, fetchQuery } from '../lib/fetchQuery';

export default function Home({ globalData, pageData }) {
  const { buttons } = pageData;
  console.log(buttons);
  return (
    <Layout data={globalData}>
      <section className="flex flex-wrap items-start justify-evenly h-full">
        {buttons &&
          buttons.map((button, index) => {
            return (
              <Link href={button.links.url} key={button.id}>
                <a className={`${index === 1 ? 'self-end' : ''} md:w-2/5 flex items-center justify-center mb-12`}>
                  <h2 className={`text-${button.textColor} absolute z-10 font-gopher font-bold text-2xl`}>
                    {button.links.text}
                  </h2>
                  <Image src={`${baseUrl}${button.svg.url}`} width={1065} height={600} />
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
