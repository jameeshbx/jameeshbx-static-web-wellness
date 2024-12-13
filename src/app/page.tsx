import React from 'react';
import Search from './component/search';
const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <ul className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Welcome to v15! Experience the turbopack dev server by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="mb-2">
            This is a starter project for <strong>Next.js 15</strong>, using
            volta to manage node versioning, yarn for dependency management and
            eslint v9.
          </li>
        </ul>
        <Search/>
      </main>
      </div>
  );
};

export default Home;
