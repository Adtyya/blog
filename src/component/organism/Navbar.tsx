/* eslint-disable tailwindcss/no-custom-classname */
import { Source_Sans_Pro } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { HeadingOne, Paragraph } from '../atom/text';

const SourceSans = Source_Sans_Pro({
  subsets: ['latin'],
  weight: '600',
});

export default function Navbar() {
  const [canvas, setCanvas] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (canvasRef.current && !canvasRef.current.contains(event?.target)) {
        setCanvas(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [canvasRef]);

  return (
    <nav className="pt-8">
      <div
        ref={canvasRef}
        className={`${
          canvas ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 z-[9999999] h-screen w-4/6 bg-gradient-to-b from-slate-700 to-slate-900 duration-300 lg:hidden`}
      >
        <div className="flex h-full w-full flex-col items-center justify-start space-y-2 px-2 pt-12">
          <div className="flex h-max w-full items-center rounded-full bg-slate-600/60 py-2">
            <button className="mx-2 h-max w-8">
              <img
                src="/assets/svg/search.svg"
                alt="search-icon"
                className="m-auto block"
              />
            </button>
            <input
              type="text"
              className="w-full bg-transparent pr-5 text-white focus:outline-0"
              placeholder="Search article"
            />
          </div>
          <br></br>
          <div className="flex flex-col items-center">
            <Link href="#" className="nav-item py-1">
              <Paragraph size="small">Random</Paragraph>
            </Link>
            <Link href="#" className="nav-item py-1">
              <Paragraph size="small">Front-end</Paragraph>
            </Link>
            <Link href="#" className="nav-item py-1">
              <Paragraph size="small">Back-end</Paragraph>
            </Link>
            <Link href="#" className="nav-item py-1">
              <Paragraph size="small">UI design</Paragraph>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between px-5 lg:px-0">
        <div
          className="block space-y-1 lg:hidden"
          onClick={() => setCanvas(true)}
        >
          <svg width={60} height={3}>
            <rect width={30} height={1.5} style={{ fill: 'white' }} />
          </svg>
          <svg width={60} height={3}>
            <rect width={30} height={1.5} style={{ fill: 'white' }} />
          </svg>
          <svg width={60} height={3}>
            <rect width={30} height={1.5} style={{ fill: 'white' }} />
          </svg>
        </div>
        <div className="flex items-center">
          <div className="mr-14 flex items-center justify-center space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#4B5563] shadow-md md:h-12 md:w-12">
              <HeadingOne size="small" className={SourceSans.className}>
                A
              </HeadingOne>
            </div>
            <Paragraph>Aditya</Paragraph>
          </div>
          <div className="ml-5 hidden items-center space-x-8 lg:flex">
            <Link href="#" className="nav-item py-1">
              <Paragraph size="small">Random</Paragraph>
            </Link>
            <Link href="#" className="nav-item py-1">
              <Paragraph size="small">Front-end</Paragraph>
            </Link>
            <Link href="#" className="nav-item py-1">
              <Paragraph size="small">Back-end</Paragraph>
            </Link>
            <Link href="#" className="nav-item py-1">
              <Paragraph size="small">UI design</Paragraph>
            </Link>
            <Link href="#" className="nav-item py-1">
              <Paragraph size="small">About</Paragraph>
            </Link>
          </div>
        </div>
        <button
          className="mx-2 block h-max w-8 lg:hidden"
          onClick={() => setCanvas(true)}
        >
          <img
            src="/assets/svg/search-m.svg"
            alt="search-icon"
            className="m-auto block"
          />
        </button>
        <div className="hidden h-max w-64 items-center rounded-full bg-slate-600/60 py-2 lg:flex">
          <button className="mx-2 h-max w-8">
            <img
              src="/assets/svg/search.svg"
              alt="search-icon"
              className="m-auto block"
            />
          </button>
          <input
            type="text"
            className="w-full bg-transparent pr-5 text-white focus:outline-0"
            placeholder="Search article"
          />
        </div>
      </div>
    </nav>
  );
}
