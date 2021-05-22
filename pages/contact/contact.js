import Image from 'next/image';
import Layout from '../../components/Layout';
import { fetchQuery } from '../../lib/fetchQuery';

export default function Contact({ globalData, pageData }) {
  console.log(pageData);
  return (
    <Layout data={globalData}>
      <section>
        {/* <Image src= /> */}
        <header></header>
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
