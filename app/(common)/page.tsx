import React from 'react';
import { setMeta } from '@/app/_libs';
import { Home } from './_components';

interface Props {
  children?: React.ReactNode;
}

export const metadata = setMeta({
  title: `홈`,
  url: `/`,
});

export default function page() {
  return (
    <Home />
  );
}
