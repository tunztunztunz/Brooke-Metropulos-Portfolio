import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import { baseUrl, fetchQuery } from '../../lib/fetchQuery';

export default function Project({ singleProject, globalData }) {
  const project = singleProject[0];
  return (
    <Layout data={globalData} category={project.category}>
      <section className="flex flex-col xl:flex-row-reverse justify-center">
        <section className="xl:w-2/5 xl:ml-16 3xl:-ml-12">
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl 3xl:text-5xl">{project.title}</h1>
            <h2 className="italic font-thin text-sm md:text-lg 3xl:text-3xl">{project.branding}</h2>
          </header>
          <ReactMarkdown className="hidden xl:block">{project.description}</ReactMarkdown>
        </section>
        <div className="mb-2 xl:w-2/5">
          <Image src={`${project?.image?.url}`} width={616} height={616} alt="picture of the project" />
        </div>
        <ReactMarkdown className="xl:hidden">{project.description}</ReactMarkdown>
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
