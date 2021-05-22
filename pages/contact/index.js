import Image from 'next/image';
import ContactForm from '../../components/ContactForm';
import Layout from '../../components/Layout';
import { baseUrl, fetchQuery } from '../../lib/fetchQuery';

export default function Contact({ globalData, pageData }) {
  return (
    <Layout data={globalData}>
      <section>
        <Image src={`${baseUrl}${pageData.image.url}`} width={687} height={657} />
        <h1 className="text-2xl mb-4 mt-4">Get In Touch !</h1>
        <ContactForm />
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
