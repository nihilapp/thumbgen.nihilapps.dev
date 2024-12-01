'use client';

import { type ReactNode } from 'react';
import { Layout } from './layout.styled';

interface Props {
  children?: ReactNode;
}

export function Footer({ children, }: Props) {
  return (
    <Layout.Footer>
      footer
    </Layout.Footer>
  );
}
