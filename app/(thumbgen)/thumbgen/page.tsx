import React from 'react';
import { setMeta } from '@/_libs';
import { Thumbgen } from './_components';

interface Props {
  children?: React.ReactNode;
}

export const metadata = setMeta({
  title: `홈`,
  url: `/thumbgen`,
});

export default function ThumbgenPage() {
  return (
    <Thumbgen />
  );
}
