import Image from 'next/image';
import Link from 'next/link';
import { baseUrl } from '../lib/fetchQuery';

export function Gallery({ projectPages }) {
  return (
    <section className="container grid gap-y-6">
      {projectPages &&
        projectPages.map((project) => {
          return (
            <Link
              as={`/${project.category}/${project.slug}`}
              href={'[category]/[slug]'}
              key={project.id}
              className="border-2 border-gray p-3"
            >
              <a>
                <Image src={`${baseUrl}${project.image.url}`} width={687} height={657} />
              </a>
            </Link>
          );
        })}
    </section>
  );
}
