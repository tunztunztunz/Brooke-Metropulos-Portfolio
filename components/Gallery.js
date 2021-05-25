import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import Link from 'next/link';
import findUrl from '../lib/findUrl';

export function Gallery({ projectPages }) {
  return (
    <section className="grid gap-y-6 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-8 xl:grid-cols-3 xl:mr-0">
      {projectPages &&
        projectPages.map((project) => {
          const url = findUrl(project.thumbnailImage.url);

          const cloudUrl = buildUrl(url.match(/[^\/]*$/)[0], {
            cloud: {
              cloudName: 'ddiaabzu0',
            },
            transformations: {
              effect: 'pixelate',
              quality: 1,
            },
          });
          return (
            <Link as={`/${project.category}/${project.slug}`} href={'[category]/[slug]'} key={project.id}>
              <a>
                <div className="border-2 border-gray pt-3 pr-3 pl-3 pb-2 relative">
                  <div
                    style={{
                      position: 'relative',
                      height: 0,
                      paddingTop: `${(687 / 687) * 100}%`,
                      backgroundImage: `url(${cloudUrl})`,
                      backgroundPosition: 'center center',
                      backgroundSize: `100%`,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                      className="w-full"
                    >
                      <Image
                        src={url}
                        width={687}
                        height={687}
                        objectFit="cover"
                        sizes="(max-width: 600px) 90vw, (max-width: 1200px) 33vw, 33vw"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
    </section>
  );
}
