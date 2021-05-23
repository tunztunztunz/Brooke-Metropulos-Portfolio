import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../lib/useOnClickOutside';

export default function Navbar({ data, category }) {
  const [open, setOpen] = useState(false);
  const color = category === 'design' ? 'pink' : category === 'illustration' ? 'red' : 'blue';
  const ref = useRef(null);
  const { links } = data;

  // TODO: Fix the bug this adds when trying to close hamburger menu
  // useOnClickOutside(ref, () => setOpen(false));
  return (
    <header className="py-4 px-4 flex flex-row flex-wrap justify-between relative border-gray border-b-2 md:border-b-4 md:px-12 md:pt-12 md:pb-6 md:items-center md:flex-col xl:flex-row xl:flex-nowrap xl:pt-6">
      <Link href={'/'}>
        <a className="text-lg font-gopher font-bold self-center md:text-4xl  md:mr-auto xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
          {/* conditionally show the shorter/longer name */}
          <span className="hidden md:block">
            brooke metropulos {category ? '| ' : ''}
            <span className={`text-${color}`}>{category ? `${category}.` : ''}</span>
          </span>
          <span className="md:hidden">
            brooke metropulos {category ? '| ' : ''}
            <span className={`text-${color}`}>{category ? `${category}.` : ''}</span>
          </span>
        </a>
      </Link>
      <button className="inline-block md:hidden w-8 h-8  text-gray p-0 self-start" onClick={() => setOpen(!open)}>
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <nav
        ref={ref}
        className={`${
          open === true ? 'flex' : 'hidden'
        } flex-col bg-white absolute w-full top-16 left-0 p-6 border-gray border-b-2 z-20 uppercase gap-y-4 md:border-0 md:flex md:text-2xl md:relative md:top-2 md:flex-row md:bg-transparent md:p-0 xl:w-max xl:top-0`}
      >
        {links &&
          links.map((link, index) => (
            <React.Fragment key={link.id}>
              <Link href={link.url}>
                <a className="md:mr-4">
                  <span className="text-lg md:text-xl xl:text-base 2xl:text-xl 3xl:text-2xl">{link.text}</span>
                </a>
              </Link>
              {index === links.length - 1 ? '' : <span className="hidden md:block md:mr-4">|</span>}
            </React.Fragment>
          ))}
      </nav>
    </header>
  );
}
