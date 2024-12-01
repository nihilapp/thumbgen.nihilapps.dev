'use client';

import { type ReactNode } from 'react';
import { Layout } from './layout.styled';

interface Props {
  children?: ReactNode;
}

export function Content({ children, }: Props) {
  return (
    <Layout.Container>
      <Layout.Main>
        {children}
      </Layout.Main>
      <Layout.Side />
    </Layout.Container>
  );
}
