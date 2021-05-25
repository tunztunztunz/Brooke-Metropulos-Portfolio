import { Image, Placeholder } from 'cloudinary-react';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import { fetchQuery } from '../../lib/fetchQuery';
import matchUrl from '../../lib/matchUrl';

export default function Project({ singleProject, globalData }) {
  const project = singleProject[0];
  // Grab the last segment of the url to feed to cloudinary component
  const url = matchUrl(project.image.url);
  return (
    <Layout data={globalData} category={project.category}>
      <section className="flex flex-col justify-center xl:flex-row-reverse 2xl:justify-around ">
        <section className="xl:w-2/5 xl:ml-16 3xl:-ml-16">
          <header className="mb-6">
            <h1 className="text-2xl md:text-3xl 3xl:text-5xl">{project.title}</h1>
            <h2 className="italic font-thin text-sm md:text-lg 3xl:text-3xl">
              {project.branding}
            </h2>
          </header>
          <ReactMarkdown className="hidden xl:block">{project.description}</ReactMarkdown>
        </section>
        <div className="mb-2 h-auto md:w-3/5 lg:w-3/5 xl:w-2/5">
          <Image
            publicId={url}
            dpr="auto"
            responsive
            width="auto"
            height="auto"
            // crop="scale"
            responsiveUseBreakpoints="true"
            format="webp"
          >
            <Placeholder type="pixelate" />
          </Image>
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
      params: {
        id: String(project.id),
        category: String(project.category),
        slug: String(project.slug),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
