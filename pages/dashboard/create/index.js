import Layout from '../../../components/Layout';
import CreateProjectForm from '../../../components/CreateProjectForm';
import { fetchQuery } from '../../../lib/fetchQuery';

export default function CreateProject({ globalData, ctx }) {
  console.log(ctx);
  return (
    <Layout data={globalData}>
      <div className="">
        <h1 className="text-5xl mb-48">Create A Project</h1>
        <CreateProjectForm />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const globalData = await fetchQuery('global');

  return {
    props: {
      globalData,
    },
  };
}
