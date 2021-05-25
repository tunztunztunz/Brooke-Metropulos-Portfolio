import Image from 'next/image';
import { buildUrl } from 'cloudinary-build-url';
import matchUrl from '../lib/matchUrl';

export default function CustomImage({
  url,
  width = null,
  height = null,
  effect = 'pixelate',
  sizes = '',
}) {
  if (!url) return null;
  const urlSegment = matchUrl(url);
  const cloudUrl = buildUrl(urlSegment, {
    cloud: {
      cloudName: 'ddiaabzu0',
    },
    transformations: {
      effect: { effect },
      quality: 1,
    },
  });
  return (
    <div
      style={{
        position: 'relative',
        height: 0,
        paddingTop: `${(width / height) * 230}%`,
        backgroundImage: `url(${cloudUrl})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
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
        <Image src={url} width={width} height={height} objectFit="cover" sizes={sizes} />
      </div>
    </div>
  );
}
