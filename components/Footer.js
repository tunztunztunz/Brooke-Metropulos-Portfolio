import Link from 'next/link';

export default function Footer({ data }) {
  const { copyright, links } = data;
  return (
    <footer className="py-4 px-4 flex justify-between pin-b">
      <span className="font-gopher font-bold">{copyright}</span>
      <span className="space-x-6">
        {links &&
          links.map((link) => (
            <Link href={link.url} key={link.id}>
              <a className="uppercase">{link.text}</a>
            </Link>
          ))}
      </span>
    </footer>
  );
}
