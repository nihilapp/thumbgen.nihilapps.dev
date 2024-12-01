'use client';

import { type ReactNode } from 'react';
import { Layout } from './layout.styled';
import { nihilappsLogo } from '@/_images';

interface Props {
  children?: ReactNode;
}

export function Header({ children, }: Props) {
  return (
    <Layout.Header>
      <Layout.Title>
        <Layout.Logo
          src={nihilappsLogo.src}
          alt='logo'
          width={500}
          height={0}
          priority
          placeholder='empty'
        />
        <Layout.HiddenTitle>
          {children}
        </Layout.HiddenTitle>
      </Layout.Title>
    </Layout.Header>
  );
}
