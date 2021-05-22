import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../lib/useOnClickOutside';

export default function Navbar({ data, category }) {
  const [open, setOpen] = useState(false);
  const color = category === 'design' ? 'pink' : category === 'illustration' ? 'red' : 'blue';
  const ref = useRef(null);
  console.log(category);
  const { links } = data;

  // TODO: Fix the bug this adds when trying to close hamburger menu
  // useOnClickOutside(ref, () => setOpen(false));
  return (
    <header className="py-4 px-4 flex flex-row flex-wrap justify-between relative border-gray border-b-2 md:border-b-4 md:x-20 md:py-10 md:items-center md:space-x-4">
      <Link href={'/'}>
        <a className="text-lg md:text-6xl font-gopher font-bold self-center">
          {/* conditionally show the shorter/longer name */}
          <span className="hidden md:block ">
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
        } bg-white absolute w-full top-16 left-0 p-6 border-gray border-b-2 z-20 uppercase gap-y-4 md:flex md:gap-x-4 md:text-2xl  flex-col md:relative  md:top-0 md:flex-row md:space-x-6  md:w-auto md:bg-transparent md:p-0`}
      >
        {links &&
          links.map((link, index) => (
            <React.Fragment key={link.id}>
              <Link href={link.url}>
                <a>
                  <span className="text-lg">{link.text}</span>
                </a>
              </Link>
              {index === links.length - 1 ? '' : <span className="hidden md:inline-block">|</span>}
            </React.Fragment>
          ))}
      </nav>
    </header>
  );
}
