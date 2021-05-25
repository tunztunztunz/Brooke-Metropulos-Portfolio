import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import ContactForm from '../../components/ContactForm';
import Layout from '../../components/Layout';
import { baseUrl, fetchQuery } from '../../lib/fetchQuery';
import findUrl from '../../lib/findUrl';

export default function Contact({ globalData, pageData }) {
  const url = findUrl(pageData.image.url);
  const cloudUrl = buildUrl(url.match(/[^\/]*$/)[0], {
    cloud: {
      cloudName: 'ddiaabzu0',
    },
    transformations: {
      effect: 'blur:1000',
      quality: 1,
    },
  });
  return (
    <Layout data={globalData}>
      <section className="flex flex-col xl:flex-row place-content-around">
        <div className="mx-auto w-full md:w-7/12 xl:w-2/5 xl:-ml-0 xl:-mr-0">
          <div
            style={{
              position: 'relative',
              height: 0,
              paddingTop: `${(687 / 720) * 100}%`,
              backgroundImage: `url(${cloudUrl})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: `100%`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              className="w-full"
            >
              <Image
                src={url}
                width={720}
                height={687}
                objectFit="cover"
                sizes="(max-width: 600px) 90vw, (max-width: 1200px) 33vw, 33vw"
              />
            </div>
          </div>
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
