'use client';

import Link from 'next/link';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export function Home({ children, }: Props) {
  return (
    <>
      <Link href='/test'>test</Link>
    </>
  );
}
