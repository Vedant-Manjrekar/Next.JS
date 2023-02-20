import React from 'react';
import { Lobster } from '@next/font/google';

const lobster = Lobster({
  weight: ['400'],
  subsets: ['latin'],
});

function page() {
  return (
    <div>
      <h1 className={`${lobster.className}`}>About Page</h1>
    </div>
  );
}

export default page;
