import CustomImage from './CustomImage';
import Link from 'next/link';
import findUrl from '../lib/findUrl';

export function Gallery({ projectPages }) {
  return (
    <section className="grid gap-y-6 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8 xl:grid-cols-3 xl:mr-0">
      {projectPages &&
        projectPages.map((project) => {
          const url = findUrl(project.thumbnailImage.url);

          return (
            <Link
              as={`/${project.category}/${project.slug}`}
              href={'[category]/[slug]'}
              key={project.id}
            >
              <a>
                <div className="border-2 border-gray pt-3 pr-3 pl-3 pb-2 relative">
                  <CustomImage
                    url={project.thumbnailImage.url}
                    width={687}
                    height={687}
                    sizes="(max-width: 600px) 90vw, (max-width: 1200px) 33vw, 33vw"
                  />
                </div>
              </a>
            </Link>
          );
        })}
    </section>
  );
}
