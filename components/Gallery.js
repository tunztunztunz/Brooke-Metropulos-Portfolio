import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from '../lib/fetchQuery';

export function Gallery({ projectPages }) {
  return (
    <section className="grid gap-y-6 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8 xl:grid-cols-3 xl:mr-0">
      {projectPages &&
        projectPages.map((project) => {
          return (
            <Link as={`/${project.category}/${project.slug}`} href={'[category]/[slug]'} key={project.id}>
              <a>
                <div className="border-2 border-gray pt-3 pr-3 pl-3 pb-2">
                  <Image src={`${project.image.url}`} width={687} height={657} />
                </div>
              </a>
            </Link>
          );
        })}
    </section>
  );
}
