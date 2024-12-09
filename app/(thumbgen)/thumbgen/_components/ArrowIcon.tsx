'use client';

import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export function ArrowIcon({ children, }: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} viewBox='0 0 24 24'>
      <path fill='currentColor' fillRule='evenodd' d='M17 15a1 1 0 0 0 .707-1.707l-5-5a1 1 0 0 0-1.414 0l-5 5A1 1 0 0 0 7 15z' clipRule='evenodd' />
    </svg>
  );
}
