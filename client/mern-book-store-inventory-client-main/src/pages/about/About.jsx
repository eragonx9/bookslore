import React from 'react';
import { BsCloudArrowUp } from 'react-icons/bs';
import { HiLockClosed, HiServer } from 'react-icons/hi';
import image from './image.jpg'; // Import the image

const About = () => {
  return (
    <div className="mt-20">
      <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-16 lg:py-20 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[50%] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-6 text-indigo-600">Discover books</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Find Your Next Read</h1>
                <p className="mt-6 text-lg leading-7 text-gray-700">
                  Explore a vast collection of books from various genres and authors. Whether you're into fiction,
                  non-fiction, romance, or mystery, we have something for everyone.
                </p>
              </div>
            </div>
          </div>
          <div className="-ml-6 sm:-ml-12 -mt-6 sm:-mt-12 p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-full max-w-none rounded-lg bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[32rem] sm:max-w-[48rem]"
              src={image} // Use imported image here
              alt=""
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  This is your one stop destination for the same.
                </p>
                <ul role="list" className="mt-8 space-y-6 text-gray-600">
                  <li className="flex gap-x-3">
                    <BsCloudArrowUp className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Easy Navigation.</strong> Click through the website to find all the books you wish to.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HiLockClosed className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Secure Transactions.</strong> Enjoy added features for safe banking transactions.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <HiServer className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    <span>
                      <strong className="font-semibold text-gray-900">Reliable Service.</strong> Be assured of reliable services.
                    </span>  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
