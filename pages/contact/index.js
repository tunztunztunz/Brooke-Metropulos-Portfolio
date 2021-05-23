import Image from 'next/image';
import ContactForm from '../../components/ContactForm';
import Layout from '../../components/Layout';
import { baseUrl, fetchQuery } from '../../lib/fetchQuery';

export default function Contact({ globalData, pageData }) {
  return (
    <Layout data={globalData}>
      <section className="flex flex-col xl:flex-row place-content-around">
        <div className="mx-auto md:w-7/12 xl:w-2/5 xl:-ml-0 xl:-mr-0">
          <Image src={`${baseUrl}${pageData.image.url}`} width={687} height={657} />
        </div>
        <section className="xl:w-2/5">
          <header>
            <h1 className="text-2xl mb-4 mt-4 md:mt-0 md:text-3xl">Get In Touch !</h1>
          </header>
          <ContactForm />
        </section>
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
