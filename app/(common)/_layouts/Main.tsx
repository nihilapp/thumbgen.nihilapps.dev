'use client';

import { type ReactNode } from 'react';
import { Layout } from './layout.styled';

interface Props {
  children?: ReactNode;
}

export function Main({ children, }: Props) {
  return (
    <Layout.Main>
      {children}
    </Layout.Main>
  );
}
