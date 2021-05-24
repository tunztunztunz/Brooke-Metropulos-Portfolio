import Image from 'next/image';
import ContactForm from '../../components/ContactForm';
import Layout from '../../components/Layout';
import { baseUrl, fetchQuery } from '../../lib/fetchQuery';
import findUrl from '../../lib/findUrl';

export default function Contact({ globalData, pageData }) {
  const url = findUrl(pageData.image.url);

  return (
    <Layout data={globalData}>
      <section className="flex flex-col xl:flex-row place-content-around">
        <div className="mx-auto w-full md:w-7/12 xl:w-2/5 xl:-ml-0 xl:-mr-0">
          <Image src={url} width={687} height={657} sizes="(max-width: 600px) 100vw, (max-width: 1023px) 40vw, 35vw" />
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
