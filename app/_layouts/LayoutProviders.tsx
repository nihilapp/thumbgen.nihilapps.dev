'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';
import StyledJsxRegistry from '@/app/registry';

interface Props {
  children?: React.ReactNode;
}

export function LayoutProviders({ children, }: Props) {
  return (
    <>
      <RecoilRoot>
        <StyledJsxRegistry>
            {children}
          </StyledJsxRegistry>
      </RecoilRoot>
    </>
  );
}
