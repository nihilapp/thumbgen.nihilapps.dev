import React from 'react';
import Link from 'next/link';
import { setMeta } from '@/_libs';

export const metadata = setMeta({
  title: `테스트`,
  url: `/`,
});

export default function page() {
  return (
    <Link href='/thumbgen'>썸네일 생성기</Link>
  );
}
