'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';
import StyledComponentsRegistry from '../registry';

interface Props {
  children?: React.ReactNode;
}

export function Providers({ children, }: Props) {
  return (
    <>
      <RecoilRoot>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </RecoilRoot>
    </>
  );
}
