import { Gallery } from '../../components/Gallery';
import Layout from '../../components/Layout';
import { fetchQuery } from '../../lib/fetchQuery';

export default function DesignIndex({ globalData, projectPages }) {
  return (
    <Layout data={globalData} category="design">
      <Gallery projectPages={projectPages} />
    </Layout>
  );
}

export async function getStaticProps() {
  const globalData = await fetchQuery('global');
  const projectPages = await fetchQuery('project-pages');

  return {
    props: {
      globalData,
      projectPages,
    },
  };
}
