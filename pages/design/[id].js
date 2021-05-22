import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import { baseUrl, fetchQuery } from '../../lib/fetchQuery';

export default function Project({ project, globalData }) {
  console.log(project);
  return (
    <Layout data={globalData} category={project.category}>
      <section className="container flex flex-col">
        <div className="mb-6">
          <h1 className="text-2xl">{project.title}</h1>
          <h3 className="italic font-thin text-sm">{project.branding}</h3>
        </div>
        <div className="mb-2">
          <Image src={`${baseUrl}${project.image.url}`} width={616} height={616} />
        </div>
        <ReactMarkdown>{project.description}</ReactMarkdown>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const globalData = await fetchQuery('global');
  const project = await fetchQuery('project-pages', `${params.id}`);
  return {
    props: {
      globalData,
      project,
    },
  };
}

export async function getStaticPaths() {
  const projects = await fetchQuery('project-pages');
  const paths = projects.map((project) => {
    return {
      params: { id: String(project.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
