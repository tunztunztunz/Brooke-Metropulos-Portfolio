import { useRouter } from 'next/router';
import { Gallery } from '../../components/Gallery';
import Layout from '../../components/Layout';
import { fetchQuery } from '../../lib/fetchQuery';

export default function DesignIndex({ globalData, pageData }) {
  const router = useRouter();
  const { category } = router.query;
  const projects = pageData.filter((project) => project.category === category);
  return (
    <Layout data={globalData} category={category}>
      {/* <Gallery projectPages={projects} /> */}
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const globalData = await fetchQuery('global');
  const pageData = await fetchQuery('project-pages');

  return {
    props: {
      globalData,
      pageData,
    },
  };
}

export async function getStaticPaths() {
  const projects = await fetchQuery('project-pages');
  const paths = projects.map((project) => {
    return {
      params: { category: String(project.category) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
