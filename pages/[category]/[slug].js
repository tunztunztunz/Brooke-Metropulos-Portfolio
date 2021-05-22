import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import { baseUrl, fetchQuery } from '../../lib/fetchQuery';

export default function Project({ singleProject, globalData }) {
  const project = singleProject[0];
  return (
    <Layout data={globalData} category={project.category}>
      <section className="container flex flex-col">
        <div className="mb-6">
          <h1 className="text-2xl">{project.title}</h1>
          <h3 className="italic font-thin text-sm">{project.branding}</h3>
        </div>
        <div className="mb-2">
          <Image src={`${baseUrl}${project?.image?.url}`} width={616} height={616} />
        </div>
        <ReactMarkdown>{project.description}</ReactMarkdown>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const globalData = await fetchQuery('global');
  const projects = await fetchQuery('project-pages');
  const singleProject = await projects.filter((project) => project.slug === params.slug);
  return {
    props: {
      globalData,
      singleProject,
    },
  };
}

export async function getStaticPaths() {
  const projects = await fetchQuery('project-pages');
  const paths = await projects.map((project) => {
    return {
      params: { id: String(project.id), category: String(project.category), slug: String(project.slug) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
